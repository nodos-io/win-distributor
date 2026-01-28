import Home1 from "@/components/slider/Home1";
import PlanSlider from "@/components/slider/PlanSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import Image from "next/image";
import FaqAccordion from "@/components/FaqAccordion";
import {
  HOME_PAGE_CONTENT,
  COMPANY_INFO,
  WHATSAPP_PHONE_LINK,
  WHATSAPP_PHONE_CLEAN,
} from "@/lib/gamer-constants";
import { Fragment } from "react";
import Script from "next/script";
import { buildFaqJsonLd, buildPageMetadata } from "@/lib/seo";
import { MovieSlider2, MovieSlider3, MovieSlider5 } from "@/components/slider/MovieSlider";

const faqJsonLd = buildFaqJsonLd(HOME_PAGE_CONTENT.FAQ.ITEMS);

export const metadata = buildPageMetadata({
  content: HOME_PAGE_CONTENT,
  pageName: "Plan Gamer",
  canonicalPath: "/plan-gamer",
});

const page = () => {
  const {
    DISCOUNT_CALLOUT,
    INSTALL_CALLOUT,
    PLAN_SECTIONS,
    FEATURE_ICONS,
    FAQ,
    CONTACT_FORM,
    CONTACT_POPUP,
  HEADER1,
  FOOTER1,
  NAVIGATION,
  PLAN_SLIDER,
  } = HOME_PAGE_CONTENT;

  const navigation = {
    PRIMARY: NAVIGATION.PRIMARY.map((item) => ({
      ...item,
      ACTIVE: item.id === "nav-gamer",
    })),
    MOBILE: NAVIGATION.MOBILE.map((item) => ({
      ...item,
      ACTIVE: item.id === "m-nav-gamer",
    })),
  };

  return (
    <NetBandLayout
      header={1}
      bodyBg="body-bg-4"
      navigation={navigation}
      headerContent={HEADER1}
      footerContent={FOOTER1}
      contactFormContent={CONTACT_FORM}
      contactPopupContent={CONTACT_POPUP}
      companyInfo={COMPANY_INFO}
      whatsappPhoneLink={WHATSAPP_PHONE_LINK}
      whatsappPhoneClean={WHATSAPP_PHONE_CLEAN}
    >
      {faqJsonLd ? (
        <Script id="plan-gamer-faq-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(faqJsonLd)}
        </Script>
      ) : null}
      <div className="plan-gamer-page">
        {/*<< Hero Section Start >>*/}
        <Home1 content={HOME_PAGE_CONTENT} formContent={CONTACT_FORM} whatsappLink={WHATSAPP_PHONE_LINK} />
        {/* New callout section */}
        <section className="gamer-install-callout">
          <div className="gamer-install-callout__content">
            <p className="gamer-install-callout__text">
              {INSTALL_CALLOUT.TEXT_PREFIX}{" "}
              <span className="gamer-install-callout__highlight">{INSTALL_CALLOUT.HIGHLIGHT}</span>{" "}
              {INSTALL_CALLOUT.TEXT_SUFFIX}
            </p>
          </div>
        </section>
        {/*<< Pricing Sections Start >>*/}
        {PLAN_SECTIONS.map((section) => (
          <section className="pricing-section fix section-padding gamer-pricing" key={section.id}>
            <div className="container custom-container-2">
              <div className="section-title text-center">
                <div className="plan-headline">
                  <h2 className="gamer-title">{section.HEADING}</h2>
                  <span style={{ color: "var(--theme)" }}>{section.PLUS_SYMBOL}</span>
                  <Image
                    src={section.LOGO.SRC}
                    alt={section.LOGO.ALT}
                    width={700}
                    height={90}
                    className={section.LOGO.CLASS_NAME}
                    priority
                  />
                </div>
              </div>
              <PlanSlider service={section.SERVICE_KEY} planSliderContent={PLAN_SLIDER} />
            </div>
          </section>
        ))}  
        {/* Plan Benefits */}
        <MovieSlider5 />
        {/*<< Faq Section Start >>*/}
        <section className="faq-section section-padding gamer-faq">
          <div className="container">
            <div className="about-wrapper">
              <div className="container custom-container-2">
                <div className="section-title text-center">
                  <span className="">{FAQ.TITLE}</span>
                </div>
              </div>
              <FaqAccordion items={FAQ.ITEMS} />
            </div>
          </div>
        </section>
      </div>
    </NetBandLayout>
  );
};
export default page;
