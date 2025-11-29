export const COMPANY_INFO = {
    // Legal business name for display across the site
    NAME: "R&F CONTACT CENTER S.A.C.",
    // Company RUC used in legal footers and privacy policy
    RUC: "20614387964",
    // Physical address for compliance references
    ADDRESS: "Av. Palmeras 3896, Los Olivos, Lima",
    // Primary contact email surfaced in legal copy
    EMAIL: "adm@ryfcontactcenter.pe",
    // Primary contact phone for static contexts
    PHONE: "934 867 509",
    WHATSAPP: {
        // WhatsApp phone with country code, no symbols
        PHONE_AREA: "51934867509",
        // WhatsApp phone formatted for UI display
        PHONE_CLEAN: "934867509",
        // Default message prefilled when opening the chat
        MESSAGE: `¡Hola! Soy tu asesora WIN.
Te ayudo a activar tu internet en casa, sin costo de instalación y con buena señal garantizada.
¿Quieres que te brinde más información?`,
        // Helper to build the wa.me link
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

// Home page hero/FAQ/plan content grouped for clarity; future pages can add their own entries.
const HOME_PAGE_FAQ_ITEMS = [
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

// Home page plan definitions (services & plans for the sliders)
const HOME_PAGE_PLAN_SERVICES = {
    // WIN TV bundles for the first pricing slider
    wintv: [
        {
            id: "internet-tv-plus-fibra",
            label: "WIN TV PLUS",
            plans: [
                {
                    id: "win-tv-plus-850",
                    title: "100% Fibra Óptica Internet",
                    speed: "850 MBPS",
                    price: "S/ 59,95",
                    priceNote: "x 1 mes",
                    originalPrice: "S/119,90",
                    brandText: "WIN TV PLUS",
                    brandImage: "/assets/img/plan/wintvplus.png",
                    addons: [],
                },
                {
                    id: "fibra-600",
                    title: "100% Fibra Óptica Internet",
                    speed: "1000 MBPS",
                    price: "S/ 69,95",
                    priceNote: "x 1 mes",
                    originalPrice: "S/139,90",
                    brandText: "winTV L1 MAX",
                    brandImage: "/assets/img/plan/wintvplus.png",
                    addons: [
                        {
                            id: "mesh",
                            image: "/assets/img/plan/mesh-optical.png",
                            topText: "Incluye Gratis",
                            bottomText: "1 Mesh",
                        },
                    ],
                },
            ],
        },
        {
            id: "internet-tv-plus-premium",
            label: "WIN TV PREMIUM",
            plans: [
                {
                    id: "premium-800",
                    title: "100% Fibra Óptica Internet",
                    speed: "850 MBPS",
                    price: "S/ 64,45",
                    priceNote: "x 1 mes",
                    originalPrice: "S/128,90",
                    brandText: "winTV Premium",
                    brandImage: "/assets/img/plan/wintv-prem.png",
                    addons: [],
                },
                {
                    id: "premium-500",
                    title: "100% Fibra Óptica Internet",
                    speed: "1000 MBPS",
                    price: "S/ 74,45",
                    priceNote: "x 1 mes",
                    originalPrice: "S/148,90",
                    brandText: "winTV Premium",
                    brandImage: "/assets/img/plan/wintv-prem.png",
                    addons: [
                        {
                            id: "mesh",
                            image: "/assets/img/plan/mesh-optical.png",
                            topText: "Incluye Gratis",
                            bottomText: "1 Mesh",
                        },
                    ],
                },
            ],
        },
        {
            id: "internet-tv-l1-max",
            label: "WIN TV L1 MAX",
            plans: [
                {
                    id: "l1-700",
                    title: "100% Fibra Óptica Internet",
                    speed: "850 MBPS",
                    price: "S/ 72,45",
                    priceNote: "x 1 mes",
                    originalPrice: "S/144,90",
                    brandText: "winTV L1 MAX",
                    brandImage: "/assets/img/plan/wintv_l1max.png",
                    addons: [],
                },
                {
                    id: "l1-400",
                    title: "100% Fibra Óptica Internet",
                    speed: "1000 MBPS",
                    price: "S/ 82,45",
                    priceNote: "x 1 mes",
                    originalPrice: "S/164,90",
                    brandText: "winTV L1 MAX",
                    brandImage: "/assets/img/plan/wintv_l1max.png",
                    addons: [
                        {
                            id: "mesh",
                            image: "/assets/img/plan/mesh-optical.png",
                            topText: "Incluye Gratis",
                            bottomText: "1 Mesh",
                        },
                    ],
                },
            ],
        },
        {
            id: "internet-tv-l1-max-premium",
            label: "WIN TV L1 MAX PREMIUM",
            plans: [
                {
                    id: "premium-max-900",
                    title: "100% Fibra Óptica Internet",
                    speed: "850 MBPS",
                    price: "S/ 77,45",
                    priceNote: "x 1 mes",
                    originalPrice: "S/154,90",
                    brandText: "winTV L1 MAX Premium",
                    brandImage: "/assets/img/plan/wintv_l1max_prem.png",
                    addons: [],
                },
                {
                    id: "premium-max-500",
                    title: "100% Fibra Óptica Internet",
                    speed: "1000 MBPS",
                    price: "S/ 87,45",
                    priceNote: "x 1 mes",
                    originalPrice: "S/174,90",
                    brandText: "winTV L1 MAX Premium",
                    brandImage: "/assets/img/plan/wintv_l1max_prem.png",
                    addons: [
                        {
                            id: "mesh",
                            image: "/assets/img/plan/mesh-optical.png",
                            topText: "Incluye Gratis",
                            bottomText: "1 Mesh",
                        },
                    ],
                },
            ],
        },
    ],
    // DGO bundles for the second pricing slider
    dgo: [
        {
            id: "dgo",
            label: "DGO BASICO",
            plans: [
                {
                    id: "dgo-basico-1",
                    title: "100% Fibra Óptica Internet",
                    speed: "850 MBPS",
                    price: "S/ 94,00",
                    priceNote: "X 1 mes",
                    originalPrice: "S/188,00",
                    brandText: "DGO",
                    brandImage: "/assets/img/plan/dgo-basico.png",
                    addons: [],
                },
                {
                    id: "dgo-basico-2",
                    title: "100% Fibra Óptica Internet",
                    speed: "1000 MBPS",
                    price: "S/ 104,00",
                    priceNote: "X 1 mes",
                    originalPrice: "S/208,00",
                    brandText: "DGO",
                    brandImage: "/assets/img/plan/dgo-basico.png",
                    addons: [
                        {
                            id: "mesh",
                            image: "/assets/img/plan/mesh-optical.png",
                            topText: "Incluye Gratis",
                            bottomText: "1 Mesh",
                        },
                    ],
                },
            ],
        },
        {
            id: "dgo-full",
            label: "DGO FULL",
            plans: [
                {
                    id: "dgo-full-1",
                    title: "100% Fibra Óptica Internet",
                    speed: "850 MBPS",
                    price: "S/ 97,50",
                    priceNote: "X 1 mes",
                    originalPrice: "S/195,00",
                    brandText: "DGO",
                    brandImage: "/assets/img/plan/dgo-full.png",
                    addons: [],
                },
                {
                    id: "dgo-full-2",
                    title: "100% Fibra Óptica Internet",
                    speed: "1000 MBPS",
                    price: "S/ 107,50",
                    priceNote: "X 1 mes",
                    originalPrice: "S/215,00",
                    brandText: "DGO",
                    brandImage: "/assets/img/plan/dgo-full.png",
                    addons: [
                        {
                            id: "mesh",
                            image: "/assets/img/plan/mesh-optical.png",
                            topText: "Incluye Gratis",
                            bottomText: "1 Mesh",
                        },
                    ],
                },
            ],
        },
    ],
};

// Aggregated home page copy, images and labels used throughout the landing experience
export const HOME_PAGE_CONTENT = {
    METADATA: {
        // Browser title shown on tabs for the home page
        TITLE: "WIN: Internet 100% fibra óptica",
        // Meta description for SEO snippets on the home page
        DESCRIPTION: "Nuestro Internet Hogar 100% fibra óptica te brindará una conexión simétrica y de alta velocidad para trabajar, estudiar o jugar en línea.",
    },
    HERO_SECTION: {
        // Slides for the hero carousel on the home page
        SLIDES: [
            {
                id: 1,
                DESKTOP_SRC: "assets/img/hero/hero_desktop_1.png",
                MOBILE_SRC: "assets/img/hero/hero_mobile_1.png",
                ALT: "Internet por fibra óptica WIN",
            },
            {
                id: 2,
                DESKTOP_SRC: "assets/img/hero/hero_desktop_2.png",
                MOBILE_SRC: "assets/img/hero/hero_mobile_2.png",
                ALT: "Planes Gamer y Hogar WIN",
            },
            {
                id: 3,
                DESKTOP_SRC: "assets/img/hero/hero_desktop_3.png",
                MOBILE_SRC: "assets/img/hero/hero_mobile_3.png",
                ALT: "Cobertura WIN en tu zona",
            },
        ],
    },
    DISCOUNT_CALLOUT: {
        // Lines shown in the purple discount banner under the hero
        LINES: [
            { id: "discount-line-1", text: "¡50% DE DESCUENTO EN", highlight: false },
            { id: "discount-line-2", text: "NUESTROS PLANES SELECCIONADOS", highlight: true },
            { id: "discount-line-3", text: "DE INTERNET 100% FIBRA ÓPTICA!", highlight: false },
        ],
    },
    PLAN_SECTIONS: [
        {
            id: "home-plan-wintv",
            // Title to the left of the plan logo
            HEADING: "100% FIBRA",
            // Character between heading and logo
            PLUS_SYMBOL: "+",
            // Logo for the WIN TV slider block
            LOGO: {
                SRC: "/assets/img/plan/wintv_logo.png",
                ALT: "WinTV Logo",
                CLASS_NAME: "plan-headline__logo",
            },
            // Service key used by PlanSlider to pick plans
            SERVICE_KEY: "wintv",
        },
        {
            id: "home-plan-dgo",
            HEADING: "100% FIBRA",
            PLUS_SYMBOL: "+",
            LOGO: {
                SRC: "/assets/img/plan/dgo_logo.png",
                ALT: "DGO Logo",
                CLASS_NAME: "plan-headline__logo dgo-logo",
            },
            SERVICE_KEY: "dgo",
        },
    ],
    FEATURE_ICONS: [
        {
            id: "feature-duos",
            ICON_CLASS: "flaticon-tv-box-1",
            TITLE: "Dúos y Tríos",
            DESCRIPTION: "Televisión digital y telefonía fija para completar tu plan según lo que necesites.",
            // Optional animation delay for WOW.js (string keeps CSS compatibility)
            WOW_DELAY: "",
        },
        {
            id: "feature-speed",
            ICON_CLASS: "flaticon-smartphone",
            TITLE: "Mayor velocidad",
            DESCRIPTION: "Descarga y sube archivos a la misma velocidad.",
            WOW_DELAY: ".5s",
        },
        {
            id: "feature-stability",
            ICON_CLASS: "flaticon-wifi-router-2",
            TITLE: "Mayor estabilidad",
            DESCRIPTION: "Conexión 100% fibra óptica hasta tu hogar (FTTH).",
            WOW_DELAY: ".7s",
        },
    ],
    FAQ: {
        // Section heading above the FAQ accordion
        TITLE: "Preguntas Frecuentes",
        // Items fed into the accordion component
        ITEMS: HOME_PAGE_FAQ_ITEMS,
    },
    PLAN_SLIDER: {
        // Button label on each plan card
        CTA_LABEL: "¡Quiero este plan!",
        // Fallback labels within each plan card
        LABELS: {
            ORIGINAL_PRICE_PREFIX: "Precio regular",
            BRAND_FALLBACK: "Marca",
            BRAND_ALT: "Logo del plan",
            ADDON_FALLBACK: "Addon",
        },
        // Empty state copy when no plans are available
        EMPTY_STATE: {
            TITLE: "Planes próximamente",
            SUBTITLE: "Estamos preparando más opciones",
            BODY: "Vuelve pronto para ver las nuevas ofertas.",
        },
        // Pricing categories keyed by service name used in the UI
        SERVICE_GROUPS: HOME_PAGE_PLAN_SERVICES,
    },
    CONTACT_POPUP: {
        // Accessible label on the close button
        CLOSE_LABEL: "Close (Esc)",
        // Loading state text shown under the modal while assets mount
        LOADING_TEXT: "Cargando...",
    },
    CONTACT_FORM: {
        // Big heading above the contact form card
        TITLE: "CAMBIATE A WIN",
        // Subtitle shown while form is idle
        SUBTITLE: "¡Déjanos tus datos y te llamamos!",
        // Subtitle shown after successful submit
        SUCCESS_SUBTITLE: "Gracias por contactarnos",
        // Primary success acknowledgement
        SUCCESS_MESSAGE: "Pronto, uno de nuestros representantes se pondrá en contacto contigo.",
        // Redirect helper copy and controls
        REDIRECT: {
            // Explanation shown before the countdown
            NOTICE: "Serás redirigido en breve a nuestro canal de WhatsApp.",
            // Label for the countdown timer
            COUNTDOWN_LABEL: "Redireccionando en",
            // Seconds to wait before redirecting to WhatsApp
            SECONDS: 5,
            // Text for the button that stops the redirect
            STOP_LABEL: "Para de redirigir",
        },
        // Optional prompt with a direct WhatsApp link
        DIRECT_LINK_PROMPT: "¿Prefieres no esperar? Haz clic aquí para chatear con nosotros ahora:",
        DIRECT_LINK_LABEL: "Ir a WhatsApp",
        // Field placeholders
        FIELDS: {
            PHONE_PLACEHOLDER: "Número de celular",
            DNI_PLACEHOLDER: "DNI/CEX/RUC",
        },
        // Privacy checkbox label and link
        PRIVACY: {
            LABEL_PREFIX: "He leído y acepto la",
            LINK_LABEL: "Política de Privacidad",
            LINK_HREF: "/politica-privacidad",
        },
        // Submit button labels
        BUTTONS: {
            DEFAULT: "Llámame",
            SUBMITTING: "Enviando",
        },
    },
    HEADER1: {
        // Brand logo displayed in the home header
        LOGO_SRC: "assets/img/logo/logo.svg",
        // Alt text for the header logo
        LOGO_ALT: "WIN internet home logo",
        // Copy shown next to the phone number
        CALL_LABEL: "Llámanos al:",
        // Text inside the CTA button to open the contact modal
        CTA_LABEL: "Contáctenos",
    },
    NAVIGATION: {
        // Desktop menu items shown in the header on the home page
        PRIMARY: [
            { id: "nav-home", LABEL: "Plan Hogar", HREF: "/", ACTIVE: true },
            { id: "nav-gamer", LABEL: "Plan Gamer", HREF: "gamer", ACTIVE: false },
        ],
        // Mobile menu items rendered in the condensed menu
        MOBILE: [
            { id: "m-nav-home", LABEL: "Plan Hogar", HREF: "/", ACTIVE: true },
            { id: "m-nav-gamer", LABEL: "Plan Gamer", HREF: "gamer", ACTIVE: false },
        ],
    },
    FOOTER1: {
        // Logo used in the footer
        LOGO_SRC: "assets/img/logo/logo.svg",
        // Alt text for the footer logo
        LOGO_ALT: "WIN internet footer logo",
        // Label preceding the phone number in the footer
        CALL_LABEL: "Llámanos al",
        // Copy that follows the company name in the copyright line
        COPYRIGHT_SUFFIX: "Todos los derechos reservados",
        // Link destination for the privacy policy
        PRIVACY_PATH: "politica-privacidad",
        // Anchor label for the privacy policy link
        PRIVACY_LABEL: "Política de Privacidad",
        // Legal/brand disclaimer shown below the footer links
        META_LINES: [
            "“WIN” y su logotipo son marcas de WI-NET TELECOM S.A.C. (RUC 20521233991).",
            "Comercializamos Internet Hogar. No ofrecemos juegos ni apuestas.",
            "WI-NET TELECOM S.A.C. - Av. República de Panamá 3418-3420, Torre Barlovento, San Isidro, Lima · Central: (+51) 01 707 3000 · 0800 741 00 · contacto@win.pe",
        ],
    },
};

// Backwards compatibility export for existing FAQ usage
export const FAQ_ITEMS = HOME_PAGE_FAQ_ITEMS;
