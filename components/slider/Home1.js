"use client";
import { sliderProps } from "@/utility/sliderProps";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactUsForm from "../form/ContactUsForm";

const Home1 = () => {
  const slides = [
    {
      id: 1,
      desktopSrc: "assets/img/hero/hero_desktop_1.png",
      mobileSrc: "assets/img/hero/hero_mobile_1.png",
      alt: "Internet por fibra óptica WIN",
    },
    {
      id: 2,
      desktopSrc: "assets/img/hero/hero_desktop_2.png",
      mobileSrc: "assets/img/hero/hero_mobile_2.png",
      alt: "Planes Gamer y Hogar WIN",
    },
    {
      id: 3,
      desktopSrc: "assets/img/hero/hero_desktop_3.png",
      mobileSrc: "assets/img/hero/hero_mobile_3.png",
      alt: "Cobertura WIN en tu zona",
    },
  ];
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
                <source media="(max-width: 991px)" srcSet={slide.mobileSrc || slide.desktopSrc} />
                <img src={slide.desktopSrc} alt={slide.alt} loading="lazy" />
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
