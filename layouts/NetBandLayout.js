"use client";
import EmbedPopup from "@/components/popup/EmbedPopup";
import ImageView from "@/components/popup/ImageView";
import ContactUsPopup from "@/components/popup/ContactUsPopup";
import { netBandUtility } from "@/utility";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import {WHATSAPP_PHONE_LINK} from "@/lib/constants";

const NetBandLayout = ({
  children,
  header,
  footer,
  bodyBg = "body",
  single,
  menus,
}) => {
  useEffect(() => {
    netBandUtility.scrollAnimation();
    netBandUtility.stickyNav();
    document.querySelector("body").className = bodyBg;
  }, []);

  return (
    <Fragment>
      <ImageView />
      <EmbedPopup />
      <ContactUsPopup />
      <Header header={header} single={single} menus={menus} />
      {children}
      <Footer footer={footer} />
      <a href={`${WHATSAPP_PHONE_LINK}`} className="wa-chat-icon" target="_blank">
        <img src="assets/img/whatsapp.svg" alt='Whatsapp Chat' loading="lazy" width="32" height="32" />
		  </a>
    </Fragment>
  );
};
export default NetBandLayout;
