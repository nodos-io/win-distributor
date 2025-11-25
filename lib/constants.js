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

export const FAQ_ITEMS = [
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
