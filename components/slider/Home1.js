"use client";
import { sliderProps } from "@/utility/sliderProps";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactUsForm from "../form/ContactUsForm";
import { HOME_PAGE_CONTENT } from "@/lib/constants";

const Home1 = () => {
  const slides = HOME_PAGE_CONTENT.HERO_SECTION.SLIDES || [];
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
        {slides.map((slide) => (
          <SwiperSlide className="swiper-slide swiper-mobile-slide" key={slide.id}>
            <div className="hero-image">
              <picture>
                <source media="(max-width: 991px)" srcSet={slide.MOBILE_SRC || slide.DESKTOP_SRC} />
                <img src={slide.DESKTOP_SRC} alt={slide.ALT} loading="lazy" />
              </picture>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hero-form-overlay">
        <div className="container">
          <div className="row justify-content-between align-items-center h-100">
            <div className="col-xl-4">
              <div className="hero-content">
                <ContactUsForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home1;
