"use client";
import EmbedPopup from "@/components/popup/EmbedPopup";
import ImageView from "@/components/popup/ImageView";
import Popup from "@/components/popup/Popup";
import { netBandUtility } from "@/utility";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
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
      <Popup />
      <Header header={header} single={single} menus={menus} />
      {children}
      <Footer footer={footer} />
    </Fragment>
  );
};
export default NetBandLayout;
