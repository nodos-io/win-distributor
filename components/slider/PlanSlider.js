"use client";

import { sliderProps } from "@/utility/sliderProps";
import { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const DEFAULT_SERVICES = [
  {
    id: "internet",
    label: "Internet Fibra Óptica",
    plans: [
      {
        id: "int-200",
        title: "100% Fibra Optica",
        speed: "400 MBPS",
        originalSpeed: "200 MBPS",
        price: "S/99.90",
        priceNote: "para siempre",
        features: [
          "Duplica Tu Velocidad",
          "Añade Mesh a tu plan",
          "100% Fibra Optica",
          "Mayor estabilidad",
        ],
        iconClass: "flaticon-connection",
      },
      {
        id: "int-300",
        title: "100% Fibra Optica",
        speed: "600 MBPS",
        originalSpeed: "300 MBPS",
        price: "S/89.00",
        priceNote: "| mensual",
        originalPrice: "S/119.00",
        features: [
          "Duplica Tu Velocidad",
          "Añade Mesh a tu plan",
          "100% Fibra Optica",
          "Mayor estabilidad",
        ],
        iconClass: "flaticon-smart-tv",
      },
    ],
  },
  {
    id: "internet-tv-plus",
    label: "Internet + WIN TV Plus",
    plans: [
      {
        id: "int-200",
        title: "100% Fibra Optica",
        speed: "400 MBPS",
        originalSpeed: "200 MBPS",
        price: "S/99.90",
        priceNote: "para siempre",
        features: [
          "Duplica Tu Velocidad",
          "Añade Mesh a tu plan",
          "100% Fibra Optica",
          "Mayor estabilidad",
        ],
        iconClass: "flaticon-connection",
      },
      {
        id: "int-300",
        title: "100% Fibra Optica",
        speed: "600 MBPS",
        originalSpeed: "300 MBPS",
        price: "S/89.00",
        priceNote: "| mensual",
        originalPrice: "S/119.00",
        features: [
          "Duplica Tu Velocidad",
          "Añade Mesh a tu plan",
          "100% Fibra Optica",
          "Mayor estabilidad",
        ],
        iconClass: "flaticon-smart-tv",
      },
    ],
  },
  {
    id: "fibra-premium",
    label: "Fibra Óptica + WIN TV Premium",
    plans: [
      {
        id: "int-200",
        title: "100% Fibra Optica",
        speed: "400 MBPS",
        originalSpeed: "200 MBPS",
        price: "S/99.90",
        priceNote: "para siempre",
        features: [
          "Duplica Tu Velocidad",
          "Añade Mesh a tu plan",
          "100% Fibra Optica",
          "Mayor estabilidad",
        ],
        iconClass: "flaticon-connection",
      },
      {
        id: "int-300",
        title: "100% Fibra Optica",
        speed: "600 MBPS",
        originalSpeed: "300 MBPS",
        price: "S/89.00",
        priceNote: "| mensual",
        originalPrice: "S/119.00",
        features: [
          "Duplica Tu Velocidad",
          "Añade Mesh a tu plan",
          "100% Fibra Optica",
          "Mayor estabilidad",
        ],
        iconClass: "flaticon-smart-tv",
      },
    ],
  },
  {
    id: "internet-tv",
    label: "Internet + TV",
    plans: [
      {
        id: "int-200",
        title: "100% Fibra Optica",
        speed: "400 MBPS",
        originalSpeed: "200 MBPS",
        price: "S/99.90",
        priceNote: "para siempre",
        features: [
          "Duplica Tu Velocidad",
          "Añade Mesh a tu plan",
          "100% Fibra Optica",
          "Mayor estabilidad",
        ],
        iconClass: "flaticon-connection",
      },
      {
        id: "int-300",
        title: "100% Fibra Optica",
        speed: "600 MBPS",
        originalSpeed: "300 MBPS",
        price: "S/89.00",
        priceNote: "| mensual",
        originalPrice: "S/119.00",
        features: [
          "Duplica Tu Velocidad",
          "Añade Mesh a tu plan",
          "100% Fibra Optica",
          "Mayor estabilidad",
        ],
        iconClass: "flaticon-smart-tv",
      },
    ],
  },
];

const PlanSlider = ({ services = DEFAULT_SERVICES }) => {
  const [activeService, setActiveService] = useState(services[0]?.id);
  const [isMobile, setIsMobile] = useState(false);

  const activePlans = useMemo(() => {
    return services.find((service) => service.id === activeService)?.plans || [];
  }, [services, activeService]);

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
        {services.map((service) => (
          <button
            key={service.id}
            className={`plan-tab${service.id === activeService ? " active" : ""}`}
            type="button"
            onClick={() => setActiveService(service.id)}
          >
            {service.label}
          </button>
        ))}
      </div>

      {isMobile ? (
        <>
          <div className="swiper-dot">
            <div className="dot" />
          </div>
          <Swiper {...sliderProps.planSlider} className="swiper movie-slider">
            <div className="swiper-wrapper">
              {activePlans.length ? (
                activePlans.map((plan) => (
                  <SwiperSlide className="swiper-slide" key={plan.id}>
                    <div className="pricing-card-items">
                      <div className="pricing-header">
                        <h6>{plan.title}</h6>
                        <h3>
                          {plan.originalSpeed ? <s>{plan.originalSpeed}</s> : null} {plan.speed}
                        </h3>
                      </div>
                      <ul className="icon-items">
                        <li>
                          <i className={plan.iconClass || "flaticon-connection"} />
                        </li>
                      </ul>
                      <ul className="price-list">
                        {plan.features.map((feature) => (
                          <li key={feature}>
                            <i className="far fa-check" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="price">
                        {plan.originalPrice ? <s>{plan.originalPrice}</s> : null} {plan.price}{" "}
                        <span>{plan.priceNote}</span>
                      </div>
                      <button className="theme-btn contact-us-popup-modal">
                        <span>Quiero Este Plan</span>
                      </button>
                    </div>
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
                <div className="pricing-card-items">
                  <div className="pricing-header">
                    <h6>{plan.title}</h6>
                    <h3>
                      {plan.originalSpeed ? <s>{plan.originalSpeed}</s> : null} {plan.speed}
                    </h3>
                  </div>
                  <ul className="icon-items">
                    <li>
                      <i className={plan.iconClass || "flaticon-connection"} />
                    </li>
                  </ul>
                  <ul className="price-list">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <i className="far fa-check" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="price">
                    {plan.originalPrice ? <s>{plan.originalPrice}</s> : null} {plan.price}{" "}
                    <span>{plan.priceNote}</span>
                  </div>
                  <button className="theme-btn contact-us-popup-modal">
                    <span>Quiero Este Plan</span>
                  </button>
                </div>
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
