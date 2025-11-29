"use client";

import { sliderProps } from "@/utility/sliderProps";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HOME_PAGE_CONTENT } from "@/lib/constants";

const PLAN_SLIDER_CONTENT = HOME_PAGE_CONTENT.PLAN_SLIDER;
const SERVICE_GROUPS = PLAN_SLIDER_CONTENT.SERVICE_GROUPS;
const CTA_LABEL = PLAN_SLIDER_CONTENT.CTA_LABEL;
const EMPTY_STATE = PLAN_SLIDER_CONTENT.EMPTY_STATE;
const LABELS = PLAN_SLIDER_CONTENT.LABELS;

const PlanSlider = ({
  services,
  service = Object.keys(SERVICE_GROUPS)[0] || "wintv",
}) => {
  const resolvedServices = useMemo(() => {
    if (services?.length) return services;
    return SERVICE_GROUPS[service] || [];
  }, [services, service]);

  const paginationId = useMemo(
    () => `plan-slider-${Math.random().toString(36).slice(2, 8)}`,
    []
  );
  const planSliderProps = useMemo(() => {
    return {
      ...sliderProps.planSlider,
      pagination: {
        ...sliderProps.planSlider.pagination,
        el: `#${paginationId}`,
      },
    };
  }, [paginationId]);

  const [activeService, setActiveService] = useState(resolvedServices[0]?.id);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setActiveService(resolvedServices[0]?.id);
  }, [resolvedServices]);

  const activePlans = useMemo(() => {
    return resolvedServices.find((svc) => svc.id === activeService)?.plans || [];
  }, [resolvedServices, activeService]);

  const renderPlanCard = (plan) => (
    <div className="pricing-card-items">
      <div className="plan-card__top">
        <p className="plan-card__title">{plan.title}</p>
        <p className="plan-card__speed">{plan.speed}</p>
        <div className="plan-card__plus-row">
          <span className="plan-card__plus">+</span>
        </div>
        <div className="plan-card__brand">
          {plan.brandImage ? (
            <Image
              src={plan.brandImage}
              alt={plan.brandAlt || LABELS.BRAND_ALT}
              width={140}
              height={25}
              className="plan-card__brand-img"
              style={{ objectFit: "contain" }}
            />
          ) : (
            <span>{plan.brandText || LABELS.BRAND_FALLBACK}</span>
          )}
        </div>
      </div>

      <div className="plan-card__price-row">
        <span className="plan-card__price">{plan.price}</span>
        {plan.priceNote ? <span className="plan-card__price-note">{plan.priceNote}</span> : null}
      </div>
      {plan.originalPrice ? (
        <div className="plan-card__original">
          {LABELS.ORIGINAL_PRICE_PREFIX} <s>{plan.originalPrice}</s>
        </div>
      ) : null}

      {plan.addons?.length ? (
        <div className="plan-card__addons">
          {plan.addons.map((addon, idx) => (
            <div className="plan-card__addon" key={addon.id || `${plan.id}-addon-${idx}`}>
              {addon.topText ? <span className="plan-card__addon-top">{addon.topText}</span> : null}
              {addon.image ? (
                <Image
                  src={addon.image}
                  alt={addon.alt || addon.topText || LABELS.ADDON_FALLBACK}
                  width={60}
                  height={60}
                  className="plan-card__addon-image"
                  style={{ objectFit: "contain" }}
                />
              ) : null}
              {addon.bottomText ? (
                <span className="plan-card__addon-bottom">{addon.bottomText}</span>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}

      <button className="theme-btn contact-us-popup-modal">
        <span>{CTA_LABEL}</span>
      </button>
    </div>
  );

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 991px)");
    const handleChange = (e) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="plan-slider-module">
      <div className="plan-tabs d-flex flex-wrap justify-content-center gap-3 mb-4">
        {resolvedServices.map((serviceItem) => (
          <button
            key={serviceItem.id}
            className={`plan-tab${serviceItem.id === activeService ? " active" : ""}`}
            type="button"
            onClick={() => setActiveService(serviceItem.id)}
          >
            {serviceItem.label}
          </button>
        ))}
      </div>

      {isMobile ? (
        <>
          <div className="swiper-dot">
            <div className="dot" id={paginationId} />
          </div>
          <Swiper {...planSliderProps} className="swiper movie-slider">
            <div className="swiper-wrapper">
              {activePlans.length ? (
                activePlans.map((plan) => (
                  <SwiperSlide className="swiper-slide" key={plan.id}>
                    {renderPlanCard(plan)}
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide className="swiper-slide">
                  <div className="pricing-card-items text-center">
                    <div className="pricing-header">
                      <h6>{EMPTY_STATE.TITLE}</h6>
                      {EMPTY_STATE.SUBTITLE ? <h3>{EMPTY_STATE.SUBTITLE}</h3> : null}
                    </div>
                    <div className="price-list">
                      {EMPTY_STATE.BODY ? <p className="mb-0">{EMPTY_STATE.BODY}</p> : null}
                    </div>
                  </div>
                </SwiperSlide>
              )}
            </div>
          </Swiper>
        </>
      ) : (
        <div className="plan-grid">
          {activePlans.length ? (
            activePlans.map((plan) => (
              <div className="plan-grid-item" key={plan.id}>
                {renderPlanCard(plan)}
              </div>
            ))
          ) : (
            <div className="plan-grid-item">
              <div className="pricing-card-items text-center">
                <div className="pricing-header">
                  <h6>{EMPTY_STATE.TITLE}</h6>
                  {EMPTY_STATE.SUBTITLE ? <h3>{EMPTY_STATE.SUBTITLE}</h3> : null}
                </div>
                <div className="price-list">
                  {EMPTY_STATE.BODY ? <p className="mb-0">{EMPTY_STATE.BODY}</p> : null}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default PlanSlider;
