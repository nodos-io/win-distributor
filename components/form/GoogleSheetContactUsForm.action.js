'use server';
import { google } from "googleapis";
import { getLimaISOString } from "@/utility/timezone";

const getGoogleSheetAuth = async () => {
  return await google.auth.getClient({
    projectId: process.env.PROJECT_ID,
    credentials: {
      type: process.env.TYPE,
      project_id: process.env.PROJECT_ID,
      private_key_id: process.env.PRIVATE_KEY_ID,
      private_key: process.env.PRIVATE_KEY,
      client_email: process.env.CLIENT_EMAIL,
      universe_domain: process.env.UNIVERSE_DOMAIN
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
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
  const values = [
    [getLimaISOString(), formData.phone || "", formData.dni || "", process.env.CONTACT_US_STATUS_REGISTERED]
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
        values
      }
    });
  } catch (error) {
    console.error("Error submitting contact form to Google Sheets:", error);
    throw error;
  }
}
