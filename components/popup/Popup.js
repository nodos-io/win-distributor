"use client";
import useClickOutside from "@/utility/useClickOutside";
import { Fragment, useEffect, useState } from "react";

const Popup_ = ({ close }) => {
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
            <form id="feifj" className="white-popup-block p-4 bg-white rounded shadow">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Numero de celular:</label>
                <input id="name" name="name" type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">DNI:</label>
                <input id="email" name="email" type="email" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary w-100">Llamame</button>
            </form>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Fragment>
  );
};

const Popup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      const popups = document.querySelectorAll(".popup-modal");
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
    open && <Popup_ close={() => setOpen(false)} />
  );
};

export default Popup;