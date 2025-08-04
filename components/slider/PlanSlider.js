"use client";

import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fragment } from "react";

const PlanSlider = () => {
  return (
    <Fragment>
      <div className="swiper-dot">
        <div className="dot" />
      </div>
      <Swiper {...sliderProps.planSlider} className="swiper movie-slider">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="pricing-card-items">
              <div className="pricing-header">
                <h6>100% Fibra Optica</h6>
                <h3><s>200 MBPS</s> 400 MBPS</h3>
              </div>
              <ul className="icon-items">
                <li>
                  <i className="flaticon-connection" />
                </li>
              </ul>
              <ul className="price-list">
                <li>
                  <i className="far fa-check" />
                  Duplica Tu Velocidad
                </li>
                <li>
                  <i className="far fa-check" />
                  Añade Mesh a tu plan
                </li>
                <li>
                  <i className="far fa-check" />
                  100% Fibra Optica
                </li>
                <li>
                  <i className="far fa-check" />
                  Mayor estabilidad
                </li>
              </ul>
              <div className="price">
                S/99.90 <span> para siempre </span>
              </div>
              <button className="theme-btn popup-modal">
                <span>Quiero Este Plan</span>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="pricing-card-items">
              <div className="pricing-header">
                <h6>100% Fibra Optica</h6>
                <h3><s>300 MBPS</s> 600 MBPS</h3>
              </div>
              <ul className="icon-items">
                <li>
                  <i className="flaticon-smart-tv" />
                </li>
              </ul>
              <ul className="price-list">
                <li>
                  <i className="far fa-check" />
                  Duplica Tu Velocidad
                </li>
                <li>
                  <i className="far fa-check" />
                  Añade Mesh a tu plan
                </li>
                <li>
                  <i className="far fa-check" />
                  100% Fibra Optica
                </li>
                <li>
                  <i className="far fa-check" />
                  Mayor estabilidad
                </li>
              </ul>
              <div className="price">
                <s>S/119.00</s> S/ 89.00 <span> | mensual </span>
              </div>
              <button className="theme-btn popup-modal">
                <span>Quiero Este Plan</span>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="pricing-card-items">
              <span className="tag">Popular</span>
              <div className="pricing-header">
                <h6>100% Fibra Optica</h6>
                <h3><s>400 MBPS</s> 800 MBPS</h3>
              </div>
              <ul className="icon-items">
                <li>
                  <i className="flaticon-connection" />
                </li>
                <li>
                  <i className="flaticon-smart-tv" />
                </li>
              </ul>
              <ul className="price-list">
                <li>
                  <i className="far fa-check" />
                  Duplica Tu Velocidad
                </li>
                <li>
                  <i className="far fa-check" />
                  Añade Mesh a tu plan
                </li>
                <li>
                  <i className="far fa-check" />
                  100% Fibra Optica
                </li>
                <li>
                  <i className="far fa-check" />
                  Mayor estabilidad
                </li>
              </ul>
              <div className="price">
                <s>S/129.00</s> S/ 99.00 <span> | mensual </span>
              </div>
              <button className="theme-btn popup-modal">
                <span>Quiero Este Plan</span>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="pricing-card-items">
              <div className="pricing-header">
                <h6>100% Fibra Optica</h6>
                <h3>600 MBPS</h3>
              </div>
              <ul className="icon-items">
                <li>
                  <i className="flaticon-connection" />
                </li>
                <li>
                  <i className="flaticon-smart-tv" />
                </li>
                <li>
                  <i className="flaticon-smart-tv-3" />
                </li>
              </ul>
              <ul className="price-list">
                <li>
                  <i className="far fa-check" />
                  Duplica Tu Velocidad
                </li>
                <li>
                  <i className="far fa-check" />
                  Añade Mesh a tu plan
                </li>
                <li>
                  <i className="far fa-check" />
                  100% Fibra Optica
                </li>
                <li>
                  <i className="far fa-check" />
                  Mayor estabilidad
                </li>
              </ul>
              <div className="price">
                <s>S/136.00</s> S/ 109.00 <span> | mensual </span>
              </div>
              <button className="theme-btn popup-modal">
                <span>Quiero Este Plan</span>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="pricing-card-items">
              <div className="pricing-header">
                <h6>100% Fibra Optica</h6>
                <h3>1000 MBPS</h3>
              </div>
              <ul className="icon-items">
                <li>
                  <i className="flaticon-connection" />
                </li>
                <li>
                  <i className="flaticon-smart-tv" />
                </li>
                <li>
                  <i className="flaticon-smart-tv-3" />
                </li>
              </ul>
              <ul className="price-list">
                <li>
                  <i className="far fa-check" />
                  Duplica Tu Velocidad
                </li>
                <li>
                  <i className="far fa-check" />
                  Añade Mesh a tu plan
                </li>
                <li>
                  <i className="far fa-check" />
                  100% Fibra Optica
                </li>
                <li>
                  <i className="far fa-check" />
                  Mayor estabilidad
                </li>
              </ul>
              <div className="price">
                <s>S/159.00</s> S/ 129.00 <span> | mensual </span>
              </div>
              <button className="theme-btn popup-modal">
                <span>Quiero Este Plan</span>
              </button>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </Fragment>
  );
};
export default PlanSlider;