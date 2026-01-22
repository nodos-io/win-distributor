import NetBandLayout from "@/layouts/NetBandLayout";
import { COMPANY_INFO } from "@/lib/hogar-constants";
import Link from "next/link";

const page = () => {
  return (
    <NetBandLayout>
      <section className="blog-wrapper news-wrapper section-padding border-bottom privacy-policy-wrapper">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">
                      <h2 className="mt-0 mb-4">POLÍTICA DE PRIVACIDAD Y TRATAMIENTO DE DATOS PERSONALES</h2>
                      <p>
                        En cumplimiento de lo dispuesto en la Ley N.º 29733 – Ley de Protección de Datos Personales, su Reglamento aprobado mediante D.S. N.º 003-2013-JUS y demás normas complementarias, <strong>{COMPANY_INFO.NAME}</strong>, con RUC N.° {COMPANY_INFO.RUC} y domicilio en {COMPANY_INFO.ADDRESS}, informa lo siguiente:
                      </p>
                      <ol>
                        <li>
                          <strong>Identidad y domicilio del titular del banco de datos personales</strong>
                          <p>
                            La responsable del tratamiento de los datos personales es <strong>{COMPANY_INFO.NAME}</strong>, en calidad de agencia comercial autorizada para la promoción y atención de solicitudes vinculadas a los servicios de WIN Internet, actuando conforme a los principios de legalidad, consentimiento, proporcionalidad, seguridad, calidad y finalidad establecidos por la Ley.
                          </p>
                        </li>
                        <li>
                          <strong>Finalidad del tratamiento</strong>
                          <p>Los datos personales que se recojan a través de los formularios web, redes sociales, llamadas telefónicas, mensajes de texto (SMS) o aplicaciones de mensajería como WhatsApp, serán utilizados para:</p>
                          <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                            <li>Contactar a los usuarios interesados en los servicios de internet de WIN.</li>
                            <li>Brindar información sobre promociones, beneficios y cobertura del servicio.</li>
                            <li>Realizar el seguimiento comercial y gestión de venta.</li>
                            <li>Atender consultas, solicitudes, reclamos o trámites iniciados por el titular.</li>
                            <li>Enviar notificaciones y recordatorios relacionados a la oferta de servicios.</li>
                            <li>Cumplir con obligaciones legales o contractuales.</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Consentimiento del titular</strong>
                          <p>
                            El usuario declara haber sido informado previamente y otorga su consentimiento libre, previo, informado, expreso e inequívoco para el tratamiento de sus datos personales con las finalidades indicadas, aceptando esta política al remitir sus datos mediante el formulario o canales de contacto proporcionados.
                          </p>
                        </li>
                        <li>
                          <strong>Plazo de conservación</strong>
                          <p>
                            Los datos serán conservados en nuestro banco de datos personales por un período máximo de diez (10) años desde su recolección o desde la última interacción, salvo que el titular solicite su cancelación antes de ese plazo.
                          </p>
                        </li>
                        <li>
                          <strong>Derechos del titular de los datos</strong>
                          <p>El titular podrá en cualquier momento ejercer sus derechos de:</p>
                          <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                            <li><strong>Acceso:</strong> conocer qué datos personales tratamos.</li>
                            <li><strong>Rectificación:</strong> solicitar la modificación de datos inexactos.</li>
                            <li><strong>Cancelación:</strong> solicitar la eliminación de sus datos personales.</li>
                            <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
                          </ul>
                          <p>Para ejercer estos derechos, puede contactarnos a:</p>
                          <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                            <li>
                              <strong>Correo electrónico:</strong>&nbsp;
                              <Link href={`mailto:${COMPANY_INFO.EMAIL}`}>
                                {COMPANY_INFO.EMAIL}
                              </Link>
                            </li>
                            <li>
                              <strong>Teléfono/WhatsApp:</strong>&nbsp;
                              <Link 
                                href={COMPANY_INFO.WHATSAPP.URL()} 
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                {COMPANY_INFO.PHONE}
                              </Link>
                            </li>
                          </ul>
                          <p>
                            Su solicitud será atendida conforme a los plazos establecidos en el artículo 55° del Reglamento de la Ley.
                          </p>
                        </li>
                        <li>
                          <strong>Medidas de seguridad</strong>
                          <p>
                            {COMPANY_INFO.NAME} adopta medidas técnicas, organizativas y legales razonables para garantizar la seguridad, confidencialidad e integridad de los datos personales, evitando su alteración, pérdida, tratamiento o acceso no autorizado.
                          </p>
                        </li>
                        <li>
                          <strong>Cesión o transferencia de datos</strong>
                          <p>
                            Los datos no serán compartidos ni transferidos a terceros, salvo que sea necesario para cumplir con obligaciones contractuales o legales, o en cumplimiento de órdenes de autoridades competentes. En ningún caso serán vendidos o cedidos con fines distintos a los indicados en esta política.
                          </p>
                        </li>
                      </ol>                      
                    </div>
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
