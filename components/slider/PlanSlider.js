"use client";

import { sliderProps } from "@/utility/sliderProps";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// WINTV Services and Plans
export const WINTV_SERVICES = [
  {
    id: "internet-tv-plus-fibra",
    label: "WIN TV PLUS",
    plans: [
      {
        id: "win-tv-plus-850",
        title: "100% Fibra Óptica Internet",
        speed: "850 MBPS",
        price: "S/ 59,95",
        priceNote: "x 1 mes",
        originalPrice: "S/119,90",
        brandText: "WIN TV PLUS",
        brandImage: "/assets/img/plan/wintvplus.png",
        addons: [],
      },
      {
        id: "fibra-600",
        title: "100% Fibra Óptica Internet",
        speed: "1000 MBPS",
        price: "S/ 69,95",
        priceNote: "x 1 mes",
        originalPrice: "S/139,90",
        brandText: "winTV L1 MAX",
        brandImage: "/assets/img/plan/wintvplus.png",
        addons: [
          {
            id: "mesh",
            image: "/assets/img/plan/mesh-optical.png",
            topText: "Incluye Gratis",
            bottomText: "1 Mesh",
          },
        ],
      },
    ],
  },
  {
    id: "internet-tv-plus-premium",
    label: "WIN TV PREMIUM",
    plans: [
      {
        id: "premium-800",
        title: "100% Fibra Óptica Internet",
        speed: "850 MBPS",
        price: "S/ 64,45",
        priceNote: "x 1 mes",
        originalPrice: "S/128,90",
        brandText: "winTV Premium",
        brandImage: "/assets/img/plan/wintv-prem.png",
        addons: [],
      },
      {
        id: "premium-500",
        title: "100% Fibra Óptica Internet",
        speed: "1000 MBPS",
        price: "S/ 74,45",
        priceNote: "x 1 mes",
        originalPrice: "S/148,90",
        brandText: "winTV Premium",
        brandImage: "/assets/img/plan/wintv-prem.png",
        addons: [
          {
            id: "mesh",
            image: "/assets/img/plan/mesh-optical.png",
            topText: "Incluye Gratis",
            bottomText: "1 Mesh",
          },
        ],
      },
    ],
  },
  {
    id: "internet-tv-l1-max",
    label: "WIN TV L1 MAX",
    plans: [
      {
        id: "l1-700",
        title: "100% Fibra Óptica Internet",
        speed: "850 MBPS",
        price: "S/ 72,45",
        priceNote: "x 1 mes",
        originalPrice: "S/144,90",
        brandText: "winTV L1 MAX",
        brandImage: "/assets/img/plan/wintv_l1max.png",
        addons: [],
      },
      {
        id: "l1-400",
        title: "100% Fibra Óptica Internet",
        speed: "1000 MBPS",
        price: "S/ 82,45",
        priceNote: "x 1 mes",
        originalPrice: "S/164,90",
        brandText: "winTV L1 MAX",
        brandImage: "/assets/img/plan/wintv_l1max.png",
        addons: [
          {
            id: "mesh",
            image: "/assets/img/plan/mesh-optical.png",
            topText: "Incluye Gratis",
            bottomText: "1 Mesh",
          },
        ],
      },
    ],
  },
  {
    id: "internet-tv-l1-max-premium",
    label: "WIN TV L1 MAX PREMIUM",
    plans: [
      {
        id: "premium-max-900",
        title: "100% Fibra Óptica Internet",
        speed: "850 MBPS",
        price: "S/ 77,45",
        priceNote: "x 1 mes",
        originalPrice: "S/154,90",
        brandText: "winTV L1 MAX Premium",
        brandImage: "/assets/img/plan/wintv_l1max_prem.png",
        addons: [],
      },
      {
        id: "premium-max-500",
        title: "100% Fibra Óptica Internet",
        speed: "1000 MBPS",
        price: "S/ 87,45",
        priceNote: "x 1 mes",
        originalPrice: "S/174,90",
        brandText: "winTV L1 MAX Premium",
        brandImage: "/assets/img/plan/wintv_l1max_prem.png",
        addons: [
          {
            id: "mesh",
            image: "/assets/img/plan/mesh-optical.png",
            topText: "Incluye Gratis",
            bottomText: "1 Mesh",
          },
        ],
      },
    ],
  },
];

// DGO Services and Plans
export const DGO_SERVICES = [
  {
    id: "dgo",
    label: "DGO BASICO",
    plans: [
      {
        id: "dgo-plan-1",
        title: "100% Fibra Óptica Internet",
        speed: "850 MBPS",
        price: "S/ 94,00",
        priceNote: "X 1 mes",
        originalPrice: "S/188,00",
        brandText: "DGO",
        brandImage: "/assets/img/plan/dgo-basico.png",
        addons: [],
      },
      {
        id: "dgo-plan-1",
        title: "100% Fibra Óptica Internet",
        speed: "1000 MBPS",
        price: "S/ 104,00",
        priceNote: "X 1 mes",
        originalPrice: "S/208,00",
        brandText: "DGO",
        brandImage: "/assets/img/plan/dgo-basico.png",
        addons: [
          {
            id: "mesh",
            image: "/assets/img/plan/mesh-optical.png",
            topText: "Incluye Gratis",
            bottomText: "1 Mesh",
          },
        ],
      },
    ],
  },
    {
    id: "dgo-full",
    label: "DGO FULL",
    plans: [
      {
        id: "dgo-plan-1",
        title: "100% Fibra Óptica Internet",
        speed: "850 MBPS",
        price: "S/ 97,50",
        priceNote: "X 1 mes",
        originalPrice: "S/195,00",
        brandText: "DGO",
        brandImage: "/assets/img/plan/dgo-full.png",
        addons: [],
      },
      {
        id: "dgo-plan-1",
        title: "100% Fibra Óptica Internet",
        speed: "1000 MBPS",
        price: "S/ 107,50",
        priceNote: "X 1 mes",
        originalPrice: "S/215,00",
        brandText: "DGO",
        brandImage: "/assets/img/plan/dgo-full.png",
        addons: [
          {
            id: "mesh",
            image: "/assets/img/plan/mesh-optical.png",
            topText: "Incluye Gratis",
            bottomText: "1 Mesh",
          },
        ],
      },
    ],
  },
];

const SERVICE_GROUPS = {
  wintv: WINTV_SERVICES,
  dgo: DGO_SERVICES,
};

const PlanSlider = ({ services, service = "wintv" }) => {
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
              alt={plan.brandAlt || "Logo del plan"}
              width={140}
              height={25}
              className="plan-card__brand-img"
              style={{ objectFit: "contain" }}
            />
          ) : (
            <span>{plan.brandText || "Marca"}</span>
          )}
        </div>
      </div>

      <div className="plan-card__price-row">
        <span className="plan-card__price">{plan.price}</span>
        {plan.priceNote ? <span className="plan-card__price-note">{plan.priceNote}</span> : null}
      </div>
      {plan.originalPrice ? (
        <div className="plan-card__original">
          Precio regular <s>{plan.originalPrice}</s>
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
                  alt={addon.alt || addon.topText || "Addon"}
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
        <span>¡Quiero este plan!</span>
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
                      <h6>Planes próximamente</h6>
                      <h3>Estamos preparando más opciones</h3>
                    </div>
                    <div className="price-list">
                      <p className="mb-0">Vuelve pronto para ver las nuevas ofertas.</p>
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
                  <h6>Planes próximamente</h6>
                  <h3>Estamos preparando más opciones</h3>
                </div>
                <div className="price-list">
                  <p className="mb-0">Vuelve pronto para ver las nuevas ofertas.</p>
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
