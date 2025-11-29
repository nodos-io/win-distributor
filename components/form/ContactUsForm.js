"use client";

import { useState, useEffect } from "react";
import { submitContactForm } from "@/components/form/GoogleSheetContactUsForm.action";
import { WHATSAPP_PHONE_LINK, HOME_PAGE_CONTENT } from "@/lib/constants";

const FORM_CONTENT = HOME_PAGE_CONTENT.CONTACT_FORM;

const SuccessMessage = ({ countdown, stopRedirect }) => (
  <div
    className="alert border-0 shadow-sm p-3 rounded-3 success-message"
    style={{ backgroundColor: "#fff7ef" }}
  >
    <div className="d-flex flex-column gap-2">
      <div className="fw-semibold" style={{ color: "var(--theme)" }}>
        {FORM_CONTENT.SUCCESS_MESSAGE}
      </div>
      <div className="small text-body">
        {FORM_CONTENT.REDIRECT.NOTICE}
      </div>
      <div className="d-flex align-items-center flex-wrap gap-2 small">
        <span className="text-secondary">{FORM_CONTENT.REDIRECT.COUNTDOWN_LABEL}</span>
        <span
          id="countdown"
          className="badge text-bg-dark"
          style={{ backgroundColor: "var(--theme)", fontSize: "0.85rem" }}
        >
          {countdown} s
        </span>
        <button
          type="button"
          className="btn btn-outline-secondary btn-sm"
          onClick={stopRedirect}
        >
          {FORM_CONTENT.REDIRECT.STOP_LABEL}
        </button>
      </div>
      <div className="small text-body">
        {FORM_CONTENT.DIRECT_LINK_PROMPT}&nbsp;
        <a href={WHATSAPP_PHONE_LINK} target="_blank" rel="noopener noreferrer" className="fw-semibold">
          {FORM_CONTENT.DIRECT_LINK_LABEL}
        </a>
      </div>
    </div>
  </div>
);

const ContactFormFields = ({ handleSubmit, submitting }) => (
  <form id="contact-us-form" method="POST" onSubmit={handleSubmit}>
    <div className="row g-4">
      <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
        <div>
          <input
            type="text"
            name="phone"
            id="phone"
            className="form-control"
            placeholder={FORM_CONTENT.FIELDS.PHONE_PLACEHOLDER}
          />
        </div>
      </div>
      <div className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
        <div>
          <input
            type="text"
            name="dni"
            id="dni"
            className="form-control"
            placeholder={FORM_CONTENT.FIELDS.DNI_PLACEHOLDER}
          />
        </div>
      </div>
      <div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="privacyPolicy"
            name="privacy-policy"
            required
          />
          <label className="form-check-label form-contact-privacy" htmlFor="privacyPolicy">
            {FORM_CONTENT.PRIVACY.LABEL_PREFIX}{" "}
            <a
              href={FORM_CONTENT.PRIVACY.LINK_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
              {FORM_CONTENT.PRIVACY.LINK_LABEL}
            </a>
          </label>
        </div>
      </div>
      <div className="col-lg-12 d-flex justify-content-center wow fadeInUp" data-wow-delay=".8s">
        <button
          type="submit"
          className={`theme-btn${submitting ? " btn-form-disabled" : ""}`}
          disabled={submitting}
        >
          <span>{submitting ? FORM_CONTENT.BUTTONS.SUBMITTING : FORM_CONTENT.BUTTONS.DEFAULT}</span>
        </button>
      </div>
    </div>
  </form>
);

const ContactUsForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [countdown, setCountdown] = useState(FORM_CONTENT.REDIRECT.SECONDS);
  const [redirectActive, setRedirectActive] = useState(true);

  useEffect(() => {
    if (success && redirectActive) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            // Try opening in a new tab; fallback to same tab if blocked
            const newWindow = window.open(
              WHATSAPP_PHONE_LINK,
              "_blank",
              "noopener,noreferrer"
            );
            if (!newWindow) {
              window.location.href = WHATSAPP_PHONE_LINK;
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [success, redirectActive]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    try {
      await submitContactForm(data);
      setSuccess(true);
      setRedirectActive(true);
      setCountdown(FORM_CONTENT.REDIRECT.SECONDS);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setSubmitting(false);
  };

  const stopRedirect = () => {
    setRedirectActive(false);
  };

  return (
    <div className="contact-us-container contact-form-items white-popup-block p-4 bg-white rounded shadow">
      <div className="contact-title">
        <h3 className="center" style={{color: "var(--theme)", marginBottom: "15px"}}>{FORM_CONTENT.TITLE}</h3>
        <h4 className="wow fadeInUp center" data-wow-delay=".3s" style={{marginBottom: "15px"}}>
          {!success ? FORM_CONTENT.SUBTITLE : FORM_CONTENT.SUCCESS_SUBTITLE}
        </h4>
        <p>&nbsp;</p>
      </div>
      {success ? (
        <SuccessMessage countdown={countdown} stopRedirect={stopRedirect} />
      ) : (
        <ContactFormFields handleSubmit={handleSubmit} submitting={submitting} />
      )}
    </div>
  );
};

export default ContactUsForm;
