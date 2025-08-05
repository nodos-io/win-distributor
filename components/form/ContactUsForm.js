"use client";

import { useState, useEffect } from "react";
import { submitContactForm } from "@/components/form/GoogleSheetContactUsForm.action";
import { WHATSAPP_PHONE_LINK } from "@/lib/constants";

const SuccessMessage = ({ countdown, stopRedirect }) => (
  <div>
    <span className="">Pronto, uno de nuestros representantes se pondrá en contacto contigo.</span>
    <span className="d-block mt-3">
      Serás redirigido en breve a nuestro canal de WhatsApp.
      <span className="d-block mt-2">
        Redireccionando en <strong id="countdown">{countdown}</strong> segundos...
        <button
          type="button"
          className="btn btn-link btn-sm ms-2"
          onClick={stopRedirect}
        >
          Para de redirigir
        </button>
      </span>
    </span>
    <span className="d-block mt-3">
      ¿Prefieres no esperar? Haz clic aquí para chatear con nosotros ahora:&nbsp;
      <a href={WHATSAPP_PHONE_LINK} target="_blank" rel="noopener noreferrer">
        Ir a WhatsApp
      </a>
    </span>
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
            placeholder="Número de celular"
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
            placeholder="DNI/CEX/RUC"
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
            He leído y acepto la{" "}
            <a
              href="/politica-privacidad"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de Privacidad
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
          <span>{submitting ? "Enviando" : "Llámame"}</span>
        </button>
      </div>
    </div>
  </form>
);

const ContactUsForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [countdown, setCountdown] = useState(7);
  const [redirectActive, setRedirectActive] = useState(true);

  useEffect(() => {
    if (success && redirectActive) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            window.location.href = WHATSAPP_PHONE_LINK;
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
      setCountdown(7);
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
        <h3 className="wow fadeInUp center" data-wow-delay=".3s">
          {!success ? "¡Déjanos tus datos y te llamamos!" : "Gracias por contactarnos"}
        </h3>
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