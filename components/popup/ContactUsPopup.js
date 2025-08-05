"use client";
import useClickOutside from "@/utility/useClickOutside";
import { Fragment, useEffect, useState } from "react";
import ContactUsForm from "@/components/form/ContactUsForm";

const ContactUsPopup_ = ({ close }) => {
  const domNode = useClickOutside(() => {
    close(false);
  });

  return (
    <Fragment>
      <div className="mfp-bg mfp-ready" onClick={() => close(false)}></div>
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div className="mfp-container popup-container mfp-s-ready">
          <div className="mfp-content" ref={domNode}>
            <button
                title="Close (Esc)"
                type="button"
                className="mfp-close"
                onClick={() => close(false)}
              >
              ×
            </button>
            <ContactUsForm/>
          </div>
          <div className="mfp-preloader">Cargando...</div>
        </div>
      </div>
    </Fragment>
  );
};

const ContactUsPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      const popups = document.querySelectorAll(".contact-us-popup-modal");
      popups.forEach((popup) => {
        popup.addEventListener("click", (e) => {
          e.preventDefault();
          setOpen(true);
        });
      });
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    open && <ContactUsPopup_ close={() => setOpen(false)} />
  );
};

export default ContactUsPopup;