"use client";
import { netBandUtility } from "@/utility";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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
        <SwiperSlide className="swiper-slide">
          <div
            className="hero-image bg-cover"
            style={{ backgroundImage: 'url("assets/img/hero/hero_1.png")' }}
          />
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-12">
                <div className="hero-content">
                  <h6>&nbsp;</h6>
                  <h1 className="text-white">
                    Duplica Tu<br/>Velocidad
                  </h1>
                  <h2>
                    <span className="hero-prefix-subtitle">Desde</span> <sub>S/</sub>89
                  </h2>
                  <p>
                    Plan De 600 MBPS
                  </p>
                  <div className="hero-button">
                    <Link
                      href="/"
                      className="theme-btn"
                    >
                      <span>
                        Info Aqui
                        <i className="fas fa-chevron-right" />
                      </span>
                    </Link>
                  </div>
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
              <div className="col-xl-12">
                <div className="hero-content">
                  <h6>
                    Plan Regular De 350 MBPS
                  </h6>
                  <h1 className="text-white">
                    500 MBPS<br/>+ L1MAX
                  </h1>
                  <h2>
                    <sub>S/</sub>99.90 <span>X3 Meses</span>
                  </h2>
                  <p>
                    Incluye Mesh
                  </p>
                  <div className="hero-button">
                    <Link
                      href="/"
                      className="theme-btn"
                    >
                      <span>
                        Info Ahora
                        <i className="fas fa-chevron-right" />
                      </span>
                    </Link>
                  </div>
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
              <div className="col-xl-12">
                <div className="hero-content">
                  <h6>&nbsp;</h6>
                  <h1
                    className="text-white"
                  >
                    El Internet<br/>Que Necesitas
                  </h1>
                  <h2>
                    <sub>&nbsp;</sub>Inc ExitLag<span>&nbsp;</span>
                  </h2>
                  <p>
                    ¿Que Esperas Para Cambiarte?
                  </p>
                  <div className="hero-button">
                    <Link
                      href="/"
                      className="theme-btn"
                    >
                      <span>
                        Nitro Aqui
                        <i className="fas fa-chevron-right" />
                      </span>
                    </Link>
                  </div>
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
