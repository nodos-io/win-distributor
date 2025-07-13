"use client";

const ContactUsForm = () => {
  return (
    <div className="contact-us-container contact-form-items white-popup-block p-4 bg-white rounded shadow">
      <div className="contact-title">
        <h3 className="wow fadeInUp center" data-wow-delay=".3s">
          ¡Déjanos tus datos y te llamamos!
        </h3>
        <p>&nbsp;</p>
      </div>
      <form id="contact-us-form" method="POST">
        <div className="row g-4">
          <div
            className="col-lg-12 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div>
              <input
                type="text"
                name="phone"
                id="phone"
                className="form-control"
                placeholder="Número de celular"
              />
            </div>
          </div>
          <div
            className="col-lg-12 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div>
              <input
                type="text"
                name="dni"
                id="dni"
                className="form-control"
                placeholder="DNI/CEX/RUC"
              />
            </div>
          </div>
          <div
            className="col-lg-12 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="privacyPolicy"
                name="privacy-policy"
                required
              />
              <label className="form-check-label form-contact-privacy" htmlFor="privacyPolicy">
                He leído y acepto la <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Política de Privacidad</a>
              </label>
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay=".8s"
          >
            <button type="submit" className="theme-btn">
              <span>
                Llámame
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContactUsForm;
