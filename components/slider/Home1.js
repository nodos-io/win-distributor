"use client";
import { sliderProps } from "@/utility/sliderProps";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactUsForm from "../form/ContactUsForm";

const Home1 = () => {
  const swiperRef = useRef(null);
  return (
    <section className="hero-section hero-1">
      <div className="array-button">
        <button className="array-prev">
          <i className="fas fa-chevron-left" />
        </button>
        <button className="array-next">
          <i className="fas fa-chevron-right" />
        </button>
      </div>
      <Swiper
        ref={swiperRef}
        {...sliderProps.home1}
        className="swiper hero-slider"
      >
        <SwiperSlide className="swiper-slide swiper-mobile-slide">
          <div
            className="hero-image bg-cover"
            style={{ backgroundImage: 'url("assets/img/hero/hero_1.png")' }}
          />
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-4">
                <div className="hero-content">
                  <ContactUsForm/>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="hero-image bg-cover"
            style={{ backgroundImage: 'url("assets/img/hero/hero_2.png")' }}
          />
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-4">
                <div className="hero-content">
                  <ContactUsForm/>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="hero-image bg-cover"
            style={{ backgroundImage: 'url("assets/img/hero/hero_3.png")' }}
          />
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-4">
                <div className="hero-content">
                  <ContactUsForm/>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Home1;
