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

const page = () => {
  const faqItem = [
    {
      id: 1,
      key: "left",
      title: "¿WIN ofrece internet 100% fibra óptica en Perú?",
      content:
        "Sí. WIN es una empresa peruana que brinda servicio exclusivo de internet por fibra óptica, asegurando mayor velocidad y estabilidad. Puedes consultar cobertura por tu dirección en Lima Metropolitana y otras zonas urbanas.",
    },
    {
      id: 2,
      key: "left",
      title: "¿Cuál es la diferencia entre el Plan Hogar y el Plan Gamer?",
      content:
        "El Plan Hogar está pensado para uso familiar (navegación, clases, streaming), mientras que el Plan Gamer está diseñado para quienes buscan mejor rendimiento: menor latencia, conexión simétrica y experiencia fluida para videojuegos o transmisiones en vivo.",
    },
    {
      id: 3,
      key: "left",
      title: "¿Cuáles son los precios actuales de los planes WIN?",
      content:
        "Los planes varían según la zona, pero tenemos:\n\nPlan Hogar desde 200 Mbps por S/99.00\n\nPlan Gamer desde 350 Mbps por S/129.00\n\nTodos los planes están sujetos a descuentos especiales y promociones por temporada.",
    },
    {
      id: 4,
      key: "left",
      title: "¿WIN cobra por instalación?",
      content:
        "No cobramos instalación en la mayoría de zonas, siempre que la ubicación pase una evaluación técnica previa. Consulta sin compromiso.",
    },
    {
      id: 5,
      key: "left",
      title: "¿El servicio de WIN tiene contrato de permanencia?",
      content:
        "No exigimos contrato forzoso. Puedes dar de baja el servicio con previa coordinación, sin penalidades ocultas.",
    },
    {
      id: 6,
      key: "right",
      title: "¿Qué beneficios incluye el Plan Gamer?",
      content:
        "El Plan Gamer ofrece:\n\n- Mayor velocidad real de subida y bajada.\n- Menor latencia (ideal para juegos en línea).\n- Mayor estabilidad durante partidas, reuniones o transmisiones en Twitch y YouTube.",
    },
    {
      id: 7,
      key: "right",
      title: "¿Qué equipo incluye la instalación?",
      content:
        "Incluye el router óptico (ONT), configuración completa y asistencia técnica.",
    },
    {
      id: 8,
      key: "right",
      title: "¿Puedo usar mi propio amplificador con WIN?",
      content:
        "Sí. WIN permite el uso de equipos propios, siempre que sean compatibles con fibra óptica. Nuestro soporte técnico puede asistirte en la configuración.",
    },
    {
      id: 9,
      key: "right",
      title: "¿Cómo se realiza el pago del servicio?",
      content:
        "Puedes pagar por Yape, Plin, banca móvil, agentes, tarjetas o débito automático. Recibirás tu recibo digital cada mes.",
    },
    {
      id: 10,
      key: "right",
      title: "¿Cómo puedo contratar WIN Internet para el hogar?",
      content:
        "Es muy fácil. Envíanos tu dirección y DNI para verificar cobertura. Si calificas, agendamos la instalación y en pocos días estarás navegando con internet 100% fibra óptica de WIN.",
    },
  ];
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
                    <NetBandAccordion items={faqItem} column="left" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-lg-0">
                <div className="faq-content style-2 style-color">
                  <div className="faq-accordion">
                    <NetBandAccordion items={faqItem} column="right" />
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
