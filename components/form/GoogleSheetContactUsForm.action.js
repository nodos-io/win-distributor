"use server";
import { google } from "googleapis";
import { getLimaISOString } from "@/utility/timezone";

const parseEmailList = (value) =>
  value
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

const getGoogleSheetAuth = async () => {
  return await google.auth.getClient({
    projectId: process.env.PROJECT_ID,
    credentials: {
      type: process.env.TYPE,
      project_id: process.env.PROJECT_ID,
      private_key_id: process.env.PRIVATE_KEY_ID,
      private_key: process.env.PRIVATE_KEY,
      client_email: process.env.CLIENT_EMAIL,
      universe_domain: process.env.UNIVERSE_DOMAIN,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
};

const getMailjetConfig = () => {
  const apiKey = process.env.CONTACT_US_MAILJET_API_KEY;
  const secretKey = process.env.CONTACT_US_MAILJET_SECRET_KEY;
  const host = process.env.CONTACT_US_MAILJET_HOST || "api.mailjet.com";

  if (!apiKey || !secretKey) {
    throw new Error(
      "Missing CONTACT_US_MAILJET_API_KEY/SECRET_KEY environment variables.",
    );
  }

  return { apiKey, secretKey, host };
};

const sendContactNotificationEmail = async ({ timestamp, phone, dni }) => {
  const toList = parseEmailList(process.env.CONTACT_US_MAILJET_TO || "");
  const fromEmail = process.env.CONTACT_US_MAILJET_FROM_EMAIL;
  const fromName = process.env.CONTACT_US_MAILJET_FROM_NAME || "Contacto Web";
  const subject =
    process.env.CONTACT_US_MAILJET_SUBJECT || "Nuevo registro de contacto";
  const sandboxMode = process.env.CONTACT_US_MAILJET_SANDBOX === "true";
  const host = process.env.CONTACT_US_MAILJET_HOST || "api.mailjet.com";

  if (toList.length === 0) {
    throw new Error("Missing CONTACT_US_MAILJET_TO environment variable.");
  }

  if (!fromEmail) {
    throw new Error(
      "Missing CONTACT_US_MAILJET_FROM_EMAIL environment variable.",
    );
  }

  const text = [
    "Nuevo registro de contacto",
    `Fecha: ${timestamp}`,
    `Telefono: ${phone || "-"}`,
    `DNI: ${dni || "-"}`,
  ].join("\n");

  const { apiKey, secretKey } = getMailjetConfig();
  const authHeader = Buffer.from(`${apiKey}:${secretKey}`).toString("base64");

  const payload = {
    Messages: [
      {
        From: { Email: fromEmail, Name: fromName },
        To: toList.map((email) => ({ Email: email })),
        Subject: subject,
        TextPart: text,
        ...(sandboxMode ? { SandboxMode: true } : {}),
      },
    ],
  };

  const response = await fetch(`https://${host}/v3.1/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${authHeader}`,
    },
    body: JSON.stringify(payload),
  });

  const responseText = await response.text();

  if (!response.ok) {
    throw new Error(
      `Mailjet send failed (${response.status}): ${responseText}`,
    );
  }
};

export async function getSheetData() {
  const auth = await getGoogleSheetAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const data = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.CONTACT_US_SHEET_ID,
    range: process.env.CONTACT_US_RANGE,
  });

  return { data: data.data.values };
}

export async function submitContactForm(formData) {
  const timestamp = getLimaISOString();
  const values = [
    [
      timestamp,
      formData.phone || "",
      formData.dni || "",
      process.env.CONTACT_US_STATUS_REGISTERED,
    ],
  ];

  console.log("Submitting form data backend:", values);

  try {
    const auth = await getGoogleSheetAuth();
    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.CONTACT_US_SHEET_ID,
      range: process.env.CONTACT_US_RANGE,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    try {
      await sendContactNotificationEmail({
        timestamp,
        phone: formData.phone,
        dni: formData.dni,
      });
    } catch (emailError) {
      console.error("Error sending contact notification email:", emailError);
    }
  } catch (error) {
    console.error("Error submitting contact form to Google Sheets:", error);
    throw error;
  }
}
