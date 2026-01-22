"use client";
import EmbedPopup from "@/components/popup/EmbedPopup";
import ImageView from "@/components/popup/ImageView";
import ContactUsPopup from "@/components/popup/ContactUsPopup";
import { netBandUtility } from "@/utility";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { WHATSAPP_PHONE_CLEAN, WHATSAPP_PHONE_LINK, HOME_PAGE_CONTENT, COMPANY_INFO } from "@/lib/hogar-constants";

const NetBandLayout = ({
  children,
  header,
  footer,
  bodyBg = "body",
  single,
  menus,
  navigation = HOME_PAGE_CONTENT.NAVIGATION,
  headerContent = HOME_PAGE_CONTENT.HEADER1,
  footerContent = HOME_PAGE_CONTENT.FOOTER1,
  contactFormContent = HOME_PAGE_CONTENT.CONTACT_FORM,
  contactPopupContent = HOME_PAGE_CONTENT.CONTACT_POPUP,
  companyInfo = COMPANY_INFO,
  whatsappPhoneLink = WHATSAPP_PHONE_LINK,
  whatsappPhoneClean = WHATSAPP_PHONE_CLEAN,
  showControllerIcon = false,
}) => {
  useEffect(() => {
    netBandUtility.scrollAnimation();
    netBandUtility.stickyNav();
    document.querySelector("body").className = bodyBg;
  }, []);

  const primaryMenus = menus || navigation?.PRIMARY;
  const mobileMenus = navigation?.MOBILE;

  return (
    <Fragment>
      <ImageView />
      <EmbedPopup />
      <ContactUsPopup popupContent={contactPopupContent} formContent={contactFormContent} whatsappLink={whatsappPhoneLink} />
      <Header
        header={header}
        single={single}
        menus={primaryMenus}
        mobileMenus={mobileMenus || primaryMenus}
        headerContent={headerContent}
        whatsappPhoneLink={whatsappPhoneLink}
        whatsappPhoneClean={whatsappPhoneClean}
      />
      {children}
      <Footer
        footer={footer}
        content={footerContent}
        companyInfo={companyInfo}
        whatsappPhoneLink={whatsappPhoneLink}
        whatsappPhoneClean={whatsappPhoneClean}
      />
      <div className="floating-chat-icons">
        {showControllerIcon ? (
          <a href="/plan-gamer" className="controller-chat-icon">
            <img src="assets/img/game-controller.png" alt="Game Controller" loading="lazy" width="64" height="64" />
          </a>
        ) : null}
        <a href={`${whatsappPhoneLink}`} className="wa-chat-icon" target="_blank">
          <img src="assets/img/whatsapp.svg" alt="Whatsapp Chat" loading="lazy" width="32" height="32" />
        </a>
      </div>
    </Fragment>
  );
};
export default NetBandLayout;
