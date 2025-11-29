"use client";
import useClickOutside from "@/utility/useClickOutside";
import { Fragment, useEffect, useState } from "react";
import ContactUsForm from "@/components/form/ContactUsForm";
import { HOME_PAGE_CONTENT } from "@/lib/constants";

const CONTACT_POPUP = HOME_PAGE_CONTENT.CONTACT_POPUP;

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
                title={CONTACT_POPUP.CLOSE_LABEL}
                type="button"
                className="mfp-close"
                onClick={() => close(false)}
              >
              ×
            </button>
            <ContactUsForm/>
          </div>
          <div className="mfp-preloader">{CONTACT_POPUP.LOADING_TEXT}</div>
        </div>
      </div>
    </Fragment>
  );
};

const ContactUsPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      const trigger = e.target.closest(".contact-us-popup-modal");
      if (trigger) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    open && <ContactUsPopup_ close={() => setOpen(false)} />
  );
};

export default ContactUsPopup;
