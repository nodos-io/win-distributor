export const COMPANY_INFO = {
    NAME: "R&F CONTACT CENTER S.A.C.",
    RUC: "20614387964",
    ADDRESS: "Av. Palmeras 3896, Los Olivos, Lima",
    EMAIL: "adm@ryfcontactcenter.pe",
    PHONE: "934 867 509",
    WHATSAPP: {
        PHONE_AREA: "51934867509",
        PHONE_CLEAN: "934867509",
        MESSAGE: `¡Hola! Soy tu asesora WIN.
Te ayudo a activar tu internet en casa, sin costo de instalación y con buena señal garantizada.
¿Quieres que te brinde más información?`,
        URL: function() {
            return `https://wa.me/${this.PHONE_AREA}?text=${encodeURIComponent(this.MESSAGE)}`;
        }
    }
};

// For backwards compatibility
export const WHATSAPP_MESSAGE = COMPANY_INFO.WHATSAPP.MESSAGE;
export const WHATSAPP_PHONE_AREA = COMPANY_INFO.WHATSAPP.PHONE_AREA;
export const WHATSAPP_PHONE_CLEAN = COMPANY_INFO.WHATSAPP.PHONE_CLEAN;
export const WHATSAPP_PHONE_LINK = COMPANY_INFO.WHATSAPP.URL();