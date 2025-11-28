import NetBandAccordion from "@/components/NetBandAccordion";
import ProgressBar from "@/components/ProgressBar";
import Service1 from "@/components/Service";
import BrandSlider from "@/components/slider/BrandSlider";
import Home1 from "@/components/slider/Home1";
import MovieSlider from "@/components/slider/MovieSlider";
import PlanSlider from "@/components/slider/PlanSlider";
import TestimonialSlider from "@/components/slider/TestimonialSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
import Image from "next/image";
import Counter from "@/components/Counter";
import { FAQ_ITEMS } from "@/lib/constants";
import FaqAccordion from "@/components/FaqAccordion";

const page = () => {
  return (
    <NetBandLayout header={1}>
      {/*<< Hero Section Start >>*/}
      <Home1 />
      {/* Discount callout */}
      <section className="discount-callout">
        <div className="container custom-container-2">
          <p className="discount-message">
            ¡50% DE DESCUENTO EN<br style={{display: "block"}}/>
            <span className="discount-message__accent">NUESTROS PLANES SELECCIONADOS</span><br style={{display: "block"}}/>
            DE INTERNET 100% FIBRA ÓPTICA!
          </p>
        </div>
      </section>
      {/*<< Pricing Section Start >>*/}
      <section className="pricing-section fix section-padding">
        <div className="container custom-container-2">
          <div className="section-title text-center">
            <div className="plan-headline">
              <h2 style={{color:"black"}}>100% FIBRA</h2>
              <span style={{color: "var(--theme)", fontSize: "50px"}}>+</span>
              <Image
                src="/assets/img/plan/wintv_logo.png"
                alt="WinTV Logo"
                width={200}
                height={80}
                className="plan-headline__logo"
                priority
              />
            </div>
          </div>
          <PlanSlider/>
        </div>
      </section>
      {/*<< Feature Icon Box Section Start >>*/}
      <section className="feature-icon-box-area">
        <div className="container">
          <div className="feature-icon-box-wrapper">
            <div className="row g-4 align-items-stretch">
              <div
                className="col-xl-4 col-lg-4 col-md-12 "
              >
                <div className="icon-box-items feature-vertical">
                  <div className="icon">
                    <i className="flaticon-tv-box-1" aria-hidden="true" />
                  </div>
                  <div className="content">
                    <h3>Dúos y Tríos</h3>
                    <p>Televisión digital y telefonía fija para completar tu plan según lo que necesites.</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-12 "
                data-wow-delay=".5s"
              >
                <div className="icon-box-items feature-vertical">
                  <div className="icon">
                    <i className="flaticon-smartphone" aria-hidden="true" />
                  </div>
                  <div className="content">
                    <h3>Mayor velocidad</h3>
                    <p>Descarga y sube archivos a la misma velocidad.</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-12 "
                data-wow-delay=".7s"
              >
                <div className="icon-box-items feature-vertical">
                  <div className="icon">
                    <i className="flaticon-wifi-router-2" aria-hidden="true" />
                  </div>
                  <div className="content">
                    <h3>Mayor estabilidad</h3>
                    <p>Conexión 100% fibra óptica hasta tu hogar (FTTH).</p>
                  </div>
                </div>
              </div>
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
                <span className="">Preguntas Frecuentes</span>
              </div>
            </div>
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>
    </NetBandLayout>
  );
};
export default page;
