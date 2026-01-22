"use client";
import useClickOutside from "@/utility/useClickOutside";
import { Fragment, useEffect, useState } from "react";
import ContactUsForm from "@/components/form/ContactUsForm";
import { HOME_PAGE_CONTENT, WHATSAPP_PHONE_LINK } from "@/lib/hogar-constants";

const ContactUsPopup_ = ({ close, popupContent, formContent, whatsappLink }) => {
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
                title={popupContent.CLOSE_LABEL}
                type="button"
                className="mfp-close"
                onClick={() => close(false)}
              >
              ×
            </button>
            <ContactUsForm formContent={formContent} whatsappLink={whatsappLink} />
          </div>
          <div className="mfp-preloader">{popupContent.LOADING_TEXT}</div>
        </div>
      </div>
    </Fragment>
  );
};

const ContactUsPopup = ({
  popupContent = HOME_PAGE_CONTENT.CONTACT_POPUP,
  formContent = HOME_PAGE_CONTENT.CONTACT_FORM,
  whatsappLink = WHATSAPP_PHONE_LINK,
}) => {
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
    open && (
      <ContactUsPopup_
        close={() => setOpen(false)}
        popupContent={popupContent}
        formContent={formContent}
        whatsappLink={whatsappLink}
      />
    )
  );
};

export default ContactUsPopup;
