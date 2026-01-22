import Home1 from "@/components/slider/Home1";
import PlanSlider from "@/components/slider/PlanSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import Image from "next/image";
import FaqAccordion from "@/components/FaqAccordion";
import { HOME_PAGE_CONTENT } from "@/lib/hogar-constants";
import { Fragment } from "react";

const page = () => {
  const { DISCOUNT_CALLOUT, PLAN_SECTIONS, FEATURE_ICONS, FAQ } = HOME_PAGE_CONTENT;

  return (
    <NetBandLayout header={1} showControllerIcon>
      {/*<< Hero Section Start >>*/}
      <Home1 />
      {/* Discount callout */}
      <section className="discount-callout">
        <div className="container custom-container-2">
          <p className="discount-message">
            {DISCOUNT_CALLOUT.LINES.map((line, index) => (
              <Fragment key={line.id}>
                {line.highlight ? (
                  <span className="discount-message__accent">{line.text}</span>
                ) : (
                  line.text
                )}
                {index < DISCOUNT_CALLOUT.LINES.length - 1 ? (
                  <br style={{ display: "block" }} />
                ) : null}
              </Fragment>
            ))}
          </p>
        </div>
      </section>
      {/*<< Pricing Sections Start >>*/}
      {PLAN_SECTIONS.map((section) => (
        <section className="pricing-section fix section-padding" key={section.id}>
          <div className="container custom-container-2">
            <div className="section-title text-center">
              <div className="plan-headline">
                <h2 style={{ color: "black" }}>{section.HEADING}</h2>
                <span style={{ color: "var(--theme)" }}>{section.PLUS_SYMBOL}</span>
                <Image
                  src={section.LOGO.SRC}
                  alt={section.LOGO.ALT}
                  width={200}
                  height={80}
                  className={section.LOGO.CLASS_NAME}
                  priority
                />
              </div>
            </div>
            <PlanSlider service={section.SERVICE_KEY} />
          </div>
        </section>
      ))}
      {/*<< Feature Icon Box Section Start >>*/}
      <section className="feature-icon-box-area">
        <div className="container">
          <div className="feature-icon-box-wrapper">
            <div className="row g-4 align-items-stretch">
              {FEATURE_ICONS.map((feature) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-12 "
                  data-wow-delay={feature.WOW_DELAY || undefined}
                  key={feature.id}
                >
                  <div className="icon-box-items feature-vertical">
                    <div className="icon">
                      <i className={feature.ICON_CLASS} aria-hidden="true" />
                    </div>
                    <div className="content">
                      <h3>{feature.TITLE}</h3>
                      <p>{feature.DESCRIPTION}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>      
      {/*<< Faq Section Start >>*/}
      <section className="faq-section section-padding">
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
    </NetBandLayout>
  );
};
export default page;
