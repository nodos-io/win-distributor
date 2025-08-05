import Link from "next/link";
import { Fragment } from "react";
import { MobileMenu } from "./Menus";
import { WHATSAPP_PHONE_LINK, WHATSAPP_PHONE_CLEAN } from "@/lib/constants";
const Offcanvas = ({ closeSidebar, sidebar, single }) => {
  return (
    <Fragment>
      <div className="fix-area">
        <div className={`offcanvas__info ${sidebar ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img src="assets/img/logo/logo.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => closeSidebar()}>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="mobile-menu fix mb-3 mean-container">
                <MobileMenu single={single} />
              </div>
              <div className="offcanvas__contact">
                <h4>Información</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a
                        href={`${WHATSAPP_PHONE_LINK}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => closeSidebar()}
                      >
                        {WHATSAPP_PHONE_CLEAN}
                      </a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <button href="contact" className="theme-btn text-center contact-us-popup-modal" onClick={() => closeSidebar()}>
                    <span>
                      Contáctenos
                      <i className="fas fa-chevron-right" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${sidebar ? "overlay-open" : ""}`}
        onClick={() => closeSidebar()}
      />
    </Fragment>
  );
};
export default Offcanvas;
