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
import Counter from "@/components/Counter";
import { FAQ_ITEMS } from "@/lib/constants";

const page = () => {
  return (
    <NetBandLayout header={1}>
      {/*<< Hero Section Start >>*/}
      <Home1 />
      {/*<< Feature Icon Box Section Start >>*/}
      <section className="feature-icon-box-area">
        <div className="container">
          <div className="feature-icon-box-wrapper">
            <div className="row g-4">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon-box-items">
                  <div className="icon">
                    <i className="flaticon-tv-box-1" />
                  </div>
                  <div className="content">
                    <h3>Win Box</h3>
                    <p>Convierte tu televisor a Smart sin necesidad de cambiarla.</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon-box-items">
                  <div className="icon">
                    <i className="flaticon-smartphone" />
                  </div>
                  <div className="content">
                    <h3>Fono Win</h3>
                    <p>Conectate sin limites, desde tu hogar o fuera de ella.</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="icon-box-items">
                  <div className="icon">
                    <i className="flaticon-wifi-router-2" />
                  </div>
                  <div className="content">
                    <h3>Mesh</h3>
                    <p>
                      Agregalos a tu plan y amplifica la cobertura del internet en tu hogar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Pricing Section Start >>*/}
      <section className="pricing-section fix section-padding">
        <div className="container custom-container-2">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Evalua tu cobertura</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              ¡Sin costo de Instalación!
            </h2>
          </div>
          <PlanSlider/>
        </div>
      </section>
      {/*<< Counter Section Start >>*/}
      <section className="counter-section">
        <div className="container">
          <div className="counter-wrapper">
            <div className="counter-items wow fadeInUp" data-wow-delay=".2s">
              <h2>
                <Counter end={6} />+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </h2>
              <p>
                Años De <br />
                Experiencia
              </p>
            </div>
            <div className="counter-items wow fadeInUp" data-wow-delay=".4s">
              <h2>
                <Counter end={600} />k
              </h2>
              <p>
                Clientes <br />
                Satisfechos
              </p>
            </div>
            <div className="counter-items wow fadeInUp" data-wow-delay=".8s">
              <h2>
                <Counter end={20} />+&nbsp;&nbsp;&nbsp;
              </h2>
              <p>
                Distritos Coberturados <br/>
                A Nivel Lima Y Mas
              </p>
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
                <span className="wow fadeInUp">Evalua tu cobertura</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mt-lg-0">
                <div className="faq-content style-2 style-color">
                  <div className="faq-accordion">
                    <NetBandAccordion items={FAQ_ITEMS} column="left" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-lg-0">
                <div className="faq-content style-2 style-color">
                  <div className="faq-accordion">
                    <NetBandAccordion items={FAQ_ITEMS} column="right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NetBandLayout>
  );
};
export default page;
