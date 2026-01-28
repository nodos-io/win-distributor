// ===================== INFORMACIÓN GLOBAL DE LA EMPRESA =====================
export const COMPANY_INFO = {
    // Nombre legal de la empresa (aparece en textos legales y footer)
    NAME: "R&F CONTACT CENTER S.A.C.",
    // RUC de la empresa (usado en textos legales)
    RUC: "20614387964",
    // Dirección física de la empresa (referencia legal)
    ADDRESS: "Av. Palmeras 3896, Los Olivos, Lima",
    // Correo principal de contacto (referencias legales)
    EMAIL: "adm@ryfcontactcenter.pe",
    // Teléfono principal de contacto
    PHONE: "934 867 509",
    // Configuración de WhatsApp para enlaces y mensajes
    WHATSAPP: {
        // Teléfono con código de país, sin símbolos
        PHONE_AREA: "51934867509",
        // Teléfono formateado para mostrar en la UI
        PHONE_CLEAN: "934867509",
        // Mensaje predeterminado que se envía al abrir WhatsApp
        MESSAGE: `¡Hola! Soy tu asesora WIN.
Te ayudo a activar tu internet en casa, sin costo de instalación y con buena señal garantizada.
¿Quieres que te brinde más información?`,
        // Enlace wa.me ya construido para abrir el chat
        URL: "https://wa.me/51934867509?text=%C2%A1Hola!%20Soy%20tu%20asesora%20WIN.%0ATe%20ayudo%20a%20activar%20tu%20internet%20en%20casa%2C%20sin%20costo%20de%20instalaci%C3%B3n%20y%20con%20buena%20se%C3%B1al%20garantizada.%0A%C2%BFQuieres%20que%20te%20brinde%20m%C3%A1s%20informaci%C3%B3n%3F"
    }
};

// ===================== EXPORTS DE COMPATIBILIDAD (NO BORRAR) =====================
// Mensaje de WhatsApp reutilizado en componentes antiguos
export const WHATSAPP_MESSAGE = COMPANY_INFO.WHATSAPP.MESSAGE;
// Teléfono con código de país reutilizado en componentes antiguos
export const WHATSAPP_PHONE_AREA = COMPANY_INFO.WHATSAPP.PHONE_AREA;
// Teléfono limpio para mostrar en UI en componentes antiguos
export const WHATSAPP_PHONE_CLEAN = COMPANY_INFO.WHATSAPP.PHONE_CLEAN;
// Enlace directo a WhatsApp reutilizado en componentes antiguos
export const WHATSAPP_PHONE_LINK = COMPANY_INFO.WHATSAPP.URL;

// ===================== FAQ (PREGUNTAS FRECUENTES) =====================
// Lista de preguntas y respuestas usadas en el acordeón de FAQ
const HOME_PAGE_FAQ_ITEMS = [
    {
        // ID interno único de la pregunta
        id: 1,
        // Columna donde aparece en el acordeón ("left" / "right")
        key: "left",
        // Texto de la pregunta
        title: "¿WIN ofrece internet 100% fibra óptica en Perú?",
        // Texto de la respuesta
        content:
            "Sí. WIN es una empresa peruana que brinda servicio exclusivo de internet por fibra óptica, asegurando mayor velocidad y estabilidad. Puedes consultar cobertura por tu dirección en Lima Metropolitana y otras zonas urbanas.",
    },
    {
        // ID interno único de la pregunta
        id: 2,
        // Columna donde aparece en el acordeón ("left" / "right")
        key: "left",
        // Texto de la pregunta
        title: "¿Cuál es la diferencia entre el Plan Hogar y el Plan Gamer?",
        // Texto de la respuesta
        content:
            "El Plan Hogar está pensado para uso familiar (navegación, clases, streaming), mientras que el Plan Gamer está diseñado para quienes buscan mejor rendimiento: menor latencia, conexión simétrica y experiencia fluida para videojuegos o transmisiones en vivo.",
    },
    {
        // ID interno único de la pregunta
        id: 3,
        // Columna donde aparece en el acordeón ("left" / "right")
        key: "left",
        // Texto de la pregunta
        title: "¿Cuáles son los precios actuales de los planes WIN?",
        // Texto de la respuesta
        content:
            "Los planes varían según la zona, pero tenemos:\n\nPlan Hogar desde 200 Mbps por S/99.00\n\nPlan Gamer desde 350 Mbps por S/129.00\n\nTodos los planes están sujetos a descuentos especiales y promociones por temporada.",
    },
    {
        // ID interno único de la pregunta
        id: 4,
        // Columna donde aparece en el acordeón ("left" / "right")
        key: "left",
        // Texto de la pregunta
        title: "¿WIN cobra por instalación?",
        // Texto de la respuesta
        content:
            "No cobramos instalación en la mayoría de zonas, siempre que la ubicación pase una evaluación técnica previa. Consulta sin compromiso.",
    },
    {
        // ID interno único de la pregunta
        id: 5,
        // Columna donde aparece en el acordeón ("left" / "right")
        key: "left",
        // Texto de la pregunta
        title: "¿El servicio de WIN tiene contrato de permanencia?",
        // Texto de la respuesta
        content:
            "No exigimos contrato forzoso. Puedes dar de baja el servicio con previa coordinación, sin penalidades ocultas.",
    },
    {
        // ID interno único de la pregunta
        id: 6,
        // Columna donde aparece en el acordeón ("left" / "right")
        key: "right",
        // Texto de la pregunta
        title: "¿Qué beneficios incluye el Plan Gamer?",
        // Texto de la respuesta
        content:
            "El Plan Gamer ofrece:\n\n- Mayor velocidad real de subida y bajada.\n- Menor latencia (ideal para juegos en línea).\n- Mayor estabilidad durante partidas, reuniones o transmisiones en Twitch y YouTube.",
    },
    {
        // ID interno único de la pregunta
        id: 7,
        // Columna donde aparece en el acordeón ("left" / "right")
        key: "right",
        // Texto de la pregunta
        title: "¿Qué equipo incluye la instalación?",
        // Texto de la respuesta
        content:
            "Incluye el router óptico (ONT), configuración completa y asistencia técnica.",
    },
    {
        // ID interno único de la pregunta
        id: 8,
        // Columna donde aparece en el acordeón ("left" / "right")
        key: "right",
        // Texto de la pregunta
        title: "¿Puedo usar mi propio amplificador con WIN?",
        // Texto de la respuesta
        content:
            "Sí. WIN permite el uso de equipos propios, siempre que sean compatibles con fibra óptica. Nuestro soporte técnico puede asistirte en la configuración.",
    },
    {
        // ID interno único de la pregunta
        id: 9,
        // Columna donde aparece en el acordeón ("left" / "right")
        key: "right",
        // Texto de la pregunta
        title: "¿Cómo se realiza el pago del servicio?",
        // Texto de la respuesta
        content:
            "Puedes pagar por Yape, Plin, banca móvil, agentes, tarjetas o débito automático. Recibirás tu recibo digital cada mes.",
    },
    {
        // ID interno único de la pregunta
        id: 10,
        // Columna donde aparece en el acordeón ("left" / "right")
        key: "right",
        // Texto de la pregunta
        title: "¿Cómo puedo contratar WIN Internet para el hogar?",
        // Texto de la respuesta
        content:
            "Es muy fácil. Envíanos tu dirección y DNI para verificar cobertura. Si calificas, agendamos la instalación y en pocos días estarás navegando con internet 100% fibra óptica de WIN.",
    },
];

// ===================== PLANES (DATOS PARA PLAN SLIDER) =====================
// Estructura de grupos y planes que consume el componente PlanSlider
const HOME_PAGE_PLAN_SERVICES = {
    // Clave del grupo (se usa como SERVICE_KEY en PLAN_SECTIONS)
    wintv: [
        {
            // ID interno del grupo de planes
            id: "internet-gamer",
            // Etiqueta que aparece como nombre del grupo
            label: "Plan Gamer WIN",
            // Lista de planes dentro del grupo
            plans: [
                {
                    // ID interno del plan
                    id: "win-gamer-600",
                    // Título visible del plan
                    title: "PLAN GAMER WIN",
                    // Velocidad del plan
                    speed: "600 MBPS",
                    // Precio promocional
                    price: "S/ 79,50",
                    // Nota del precio (por ejemplo: "x 1 mes")
                    priceNote: "x 1 mes",
                    // Precio regular sin descuento
                    originalPrice: "S/159,00",
                    // Lista de beneficios/adicionales del plan
                    addons: [
                        {
                            // ID interno del addon
                            id: "exitlag",
                            // Imagen del addon
                            image: "/assets/img/exitlag.png",
                            // Texto superior del addon
                            topText: "Incluye:",
                            // Ancho sugerido de la imagen (opcional)
                            imageWidth: 150,
                            // Máximo ancho CSS de la imagen (opcional)
                            maxWidth: "150px",
                        },
                        {
                            // ID interno del addon
                            id: "mesh",
                            // Imagen del addon
                            image: "/assets/img/plan/mesh-optical.png",
                            // Texto superior del addon
                            topText: "Incluye Gratis",
                            // Texto inferior del addon
                            bottomText: "1 Mesh",
                        }
                    ],
                },
                {
                    // ID interno del plan
                    id: "win-gamer-1000",
                    // Título visible del plan
                    title: "PLAN GAMER WIN",
                    // Velocidad del plan
                    speed: "1000 MBPS",
                    // Precio promocional
                    price: "S/ 94,50",
                    // Nota del precio (por ejemplo: "x 1 mes")
                    priceNote: "x 1 mes",
                    // Precio regular sin descuento
                    originalPrice: "S/189,00",
                    // Lista de beneficios/adicionales del plan
                    addons: [
                        {
                            // ID interno del addon
                            id: "exitlag",
                            // Imagen del addon
                            image: "/assets/img/exitlag.png",
                            // Texto superior del addon
                            topText: "Incluye:",
                            // Ancho sugerido de la imagen (opcional)
                            imageWidth: 150,
                            // Máximo ancho CSS de la imagen (opcional)
                            maxWidth: "150px",
                        },
                        {
                            // ID interno del addon
                            id: "mesh",
                            // Imagen del addon
                            image: "/assets/img/plan/mesh-optical.png",
                            // Texto superior del addon
                            topText: "Incluye Gratis",
                            // Texto inferior del addon
                            bottomText: "1 Mesh",
                        }
                    ],
                },
            ],
        }
    ],
};

// ===================== CONTENIDO DE LA PÁGINA PLAN GAMER =====================
// Ordenado según el flujo visual de /plan-gamer
export const HOME_PAGE_CONTENT = {
    // ----- SEO / METADATA -----
    METADATA: {
        // Título que aparece en la pestaña del navegador
        TITLE: "WIN: Internet 100% fibra óptica",
        // Descripción usada por buscadores
        DESCRIPTION: "Nuestro Internet Hogar 100% fibra óptica te brindará una conexión simétrica y de alta velocidad para trabajar, estudiar o jugar en línea.",
    },
    // ----- HEADER (NetBandLayout) -----
    HEADER1: {
        // Imagen del logo en el header
        LOGO_SRC: "assets/img/logo/win-gamer.PNG",
        // Texto alternativo del logo
        LOGO_ALT: "WIN internet home logo",
        // Texto al lado del teléfono
        CALL_LABEL: "Llámanos al:",
        // Texto del botón de contacto
        CTA_LABEL: "Contáctenos",
    },
    // ----- NAVEGACIÓN PRINCIPAL -----
    NAVIGATION: {
        // Ítems del menú principal en desktop
        PRIMARY: [
            {
                // ID interno del ítem
                id: "nav-home",
                // Texto visible del ítem
                LABEL: "Plan Hogar",
                // Enlace del ítem
                HREF: "/",
                // Si está activo por defecto
                ACTIVE: true,
            },
            {
                // ID interno del ítem
                id: "nav-gamer",
                // Texto visible del ítem
                LABEL: "Plan Gamer",
                // Enlace del ítem
                HREF: "plan-gamer",
                // Si está activo por defecto
                ACTIVE: false,
            },
        ],
        // Ítems del menú en mobile
        MOBILE: [
            {
                // ID interno del ítem
                id: "m-nav-home",
                // Texto visible del ítem
                LABEL: "Plan Hogar",
                // Enlace del ítem
                HREF: "/",
                // Si está activo por defecto
                ACTIVE: true,
            },
            {
                // ID interno del ítem
                id: "m-nav-gamer",
                // Texto visible del ítem
                LABEL: "Plan Gamer",
                // Enlace del ítem
                HREF: "plan-gamer",
                // Si está activo por defecto
                ACTIVE: false,
            },
        ],
    },
    // ----- HERO / HOME1 -----
    HERO_SECTION: {
        // Slides del hero (Home1)
        SLIDES: [
            {
                // ID interno del slide
                id: 1,
                // Imagen para desktop
                DESKTOP_SRC: "assets/img/hero/hero_desktop_1.png",
                // Imagen para mobile
                MOBILE_SRC: "assets/img/hero/hero_mobile_1.png",
                // Texto alternativo de la imagen
                ALT: "Internet por fibra óptica WIN",
            },
            {
                // ID interno del slide
                id: 2,
                // Imagen para desktop
                DESKTOP_SRC: "assets/img/hero/hero_desktop_2.png",
                // Imagen para mobile
                MOBILE_SRC: "assets/img/hero/hero_mobile_2.png",
                // Texto alternativo de la imagen
                ALT: "Planes Gamer y Hogar WIN",
            },
            {
                // ID interno del slide
                id: 3,
                // Imagen para desktop
                DESKTOP_SRC: "assets/img/hero/hero_desktop_3.png",
                // Imagen para mobile
                MOBILE_SRC: "assets/img/hero/hero_mobile_3.png",
                // Texto alternativo de la imagen
                ALT: "Cobertura WIN en tu zona",
            },
        ],
    },
    // ----- FORMULARIO DE CONTACTO (Hero + Modal) -----
    CONTACT_FORM: {
        // Título grande del formulario
        TITLE: "CAMBIATE A WIN",
        // Subtítulo mientras el formulario está sin enviar
        SUBTITLE: "¡Déjanos tus datos y te llamamos!",
        // Subtítulo después de enviar correctamente
        SUCCESS_SUBTITLE: "Gracias por contactarnos",
        // Mensaje de éxito principal
        SUCCESS_MESSAGE: "Pronto, uno de nuestros representantes se pondrá en contacto contigo.",
        // Configuración del redireccionamiento a WhatsApp
        REDIRECT: {
            // Texto explicativo antes del conteo
            NOTICE: "Serás redirigido en breve a nuestro canal de WhatsApp.",
            // Etiqueta del contador
            COUNTDOWN_LABEL: "Redireccionando en",
            // Segundos antes del redireccionamiento
            SECONDS: 5,
            // Texto del botón para detener el redireccionamiento
            STOP_LABEL: "Para de redirigir",
        },
        // Texto opcional para ir directo a WhatsApp
        DIRECT_LINK_PROMPT: "¿Prefieres no esperar? Haz clic aquí para chatear con nosotros ahora:",
        // Texto del enlace directo a WhatsApp
        DIRECT_LINK_LABEL: "Ir a WhatsApp",
        // Placeholders de los campos del formulario
        FIELDS: {
            // Placeholder del teléfono
            PHONE_PLACEHOLDER: "Número de celular",
            // Placeholder del DNI/CEX/RUC
            DNI_PLACEHOLDER: "DNI/CEX/RUC",
        },
        // Texto del checkbox de privacidad
        PRIVACY: {
            // Texto antes del enlace
            LABEL_PREFIX: "He leído y acepto la",
            // Texto del enlace
            LINK_LABEL: "Política de Privacidad",
            // Ruta del enlace
            LINK_HREF: "/politica-privacidad",
        },
        // Textos de botones
        BUTTONS: {
            // Texto por defecto del botón
            DEFAULT: "Llámame",
            // Texto mientras se envía
            SUBMITTING: "Enviando",
        },
    },
    // ----- MODAL DE CONTACTO -----
    CONTACT_POPUP: {
        // Texto accesible del botón cerrar
        CLOSE_LABEL: "Close (Esc)",
        // Texto mientras carga el modal
        LOADING_TEXT: "Cargando...",
    },
    // ----- CALLOUT DE DESCUENTO (NO SE USA EN /plan-gamer ACTUALMENTE) -----
    DISCOUNT_CALLOUT: {
        // Líneas que aparecen en el banner de descuento
        LINES: [
            {
                // ID interno de la línea
                id: "discount-line-1",
                // Texto de la línea
                text: "¡50% DE DESCUENTO EN",
                // Si esta línea va resaltada
                highlight: false,
            },
            {
                // ID interno de la línea
                id: "discount-line-2",
                // Texto de la línea
                text: "NUESTROS PLANES SELECCIONADOS",
                // Si esta línea va resaltada
                highlight: true,
            },
            {
                // ID interno de la línea
                id: "discount-line-3",
                // Texto de la línea
                text: "DE INTERNET 100% FIBRA ÓPTICA!",
                // Si esta línea va resaltada
                highlight: false,
            },
        ],
    },
    // ----- CALLOUT DE INSTALACIÓN (Plan Gamer) -----
    INSTALL_CALLOUT: {
        // Texto inicial
        TEXT_PREFIX: "APROVECHA",
        // Texto resaltado
        HIGHLIGHT: "S/0 COSTO",
        // Texto final
        TEXT_SUFFIX: "DE INSTALACIÓN",
    },
    // ----- SECCIÓN DE PLANES -----
    PLAN_SECTIONS: [
        {
            // ID interno de la sección
            id: "home-plan-wintv",
            // Logo que acompaña el título
            LOGO: {
                // Ruta del logo
                SRC: "/assets/img/planes-gamer-win_upscaled.png",
                // Texto alternativo del logo
                ALT: "Planes Gamer WIN",
                // Clase CSS para el logo
                CLASS_NAME: "plan-headline__logo",
            },
            // Clave del grupo de planes (de HOME_PAGE_PLAN_SERVICES)
            SERVICE_KEY: "wintv",
        }
    ],
    // ----- CONFIGURACIÓN DEL SLIDER DE PLANES -----
    PLAN_SLIDER: {
        // Texto del botón en cada plan
        CTA_LABEL: "¡Quiero este plan!",
        // Etiquetas internas del plan
        LABELS: {
            // Prefijo para el precio regular
            ORIGINAL_PRICE_PREFIX: "Precio regular",
            // Texto por defecto si no hay marca
            BRAND_FALLBACK: "Marca",
            // Texto alternativo para logos
            BRAND_ALT: "Logo del plan",
            // Texto por defecto para addon
            ADDON_FALLBACK: "Addon",
        },
        // Mensajes cuando no hay planes
        EMPTY_STATE: {
            // Título del estado vacío
            TITLE: "Planes próximamente",
            // Subtítulo del estado vacío
            SUBTITLE: "Estamos preparando más opciones",
            // Texto del estado vacío
            BODY: "Vuelve pronto para ver las nuevas ofertas.",
        },
        // Grupos de planes a mostrar
        SERVICE_GROUPS: HOME_PAGE_PLAN_SERVICES,
    },
    // ----- BENEFICIOS (MovieSlider5) -----
    MOVIE_SLIDER_5: {
        // Título de la sección de beneficios
        TITLE: {
            // Texto principal
            TEXT: "CONOCE LOS BENEFICIOS DE TU",
            // Texto resaltado dentro de <span>
            HIGHLIGHT: "PLAN DE INTERNET GAMER",
        },
        // Lista de beneficios (slides)
        ITEMS: [
            {
                // ID interno del beneficio
                id: "benefit-nitro",
                // Imagen del beneficio
                IMAGE: "assets/img/shows/bg-beneficio-1.jpg",
                // Texto alternativo de la imagen
                ALT: "NITRO",
                // Título del beneficio
                TITLE: "NITRO",
                // Texto en negrita
                EMPHASIS: "Hasta 120 horas mensuales para duplicar tu velocidad.",
                // Texto complementario
                DESCRIPTION: "Juega, streamea, descarga y actualiza tus juegos, todo al mismo tiempo.",
            },
            {
                // ID interno del beneficio
                id: "benefit-ip",
                // Imagen del beneficio
                IMAGE: "assets/img/shows/bg-beneficio-2.jpg",
                // Texto alternativo de la imagen
                ALT: "Cambio de IP",
                // Título del beneficio
                TITLE: "CAMBIO DE IP",
                // Texto en negrita
                EMPHASIS: "Ahora podrás tener la opción de cambiar tu dirección IP",
                // Texto complementario
                DESCRIPTION: "en cualquier momento para mayor seguridad y privacidad, hasta 3 veces por mes.",
            },
            {
                // ID interno del beneficio
                id: "benefit-discord",
                // Imagen del beneficio
                IMAGE: "assets/img/shows/bg-beneficio-3.jpg",
                // Texto alternativo de la imagen
                ALT: "Atención 24/7 por Discord",
                // Título del beneficio
                TITLE: "ATENCIÓN 24/7 por Discord",
                // Texto en negrita
                EMPHASIS: "Servicio de atención técnica de gamers para gamers.",
                // Texto complementario
                DESCRIPTION: "Solucionamos tus inconvenientes, incluso durante las madrugadas, ahora también por nuestro canal de Discord.",
            },
            {
                // ID interno del beneficio
                id: "benefit-exitlag",
                // Imagen del beneficio
                IMAGE: "assets/img/shows/bg-beneficio-4.jpg",
                // Texto alternativo de la imagen
                ALT: "Enrutamiento optimizado",
                // Título del beneficio
                TITLE: "ENRUTAMIENTO OPTIMIZADO CON",
                // Texto en negrita
                EMPHASIS: "Tomamos la ruta más directa al servidor de tu juego favorito para que tengas partidas fluidas y sin interrupciones.",
                // Texto complementario
                DESCRIPTION: "Además, con ExitLag optimizamos más de 1900 juegos y es compatible con juegos de iOS y Android.",
            },
            {
                // ID interno del beneficio
                id: "benefit-nat",
                // Imagen del beneficio
                IMAGE: "assets/img/shows/bg-beneficio-5.jpg",
                // Texto alternativo de la imagen
                ALT: "NAT 1 y NAT 2",
                // Título del beneficio
                TITLE: "NAT 1 Y NAT 2",
                // Texto en negrita
                EMPHASIS: "Te brindamos una mejor experiencia de juego en línea sin problemas de conectividad.",
            },
        ],
    },
    // ----- ICONOS DE BENEFICIOS (NO SE USA EN /plan-gamer ACTUALMENTE) -----
    FEATURE_ICONS: [
        {
            // ID interno del ícono
            id: "feature-duos",
            // Clase del ícono
            ICON_CLASS: "flaticon-tv-box-1",
            // Título del ícono
            TITLE: "Dúos y Tríos",
            // Descripción del ícono
            DESCRIPTION: "Televisión digital y telefonía fija para completar tu plan según lo que necesites.",
            // Delay de animación (WOW.js)
            WOW_DELAY: "",
        },
        {
            // ID interno del ícono
            id: "feature-speed",
            // Clase del ícono
            ICON_CLASS: "flaticon-smartphone",
            // Título del ícono
            TITLE: "Mayor velocidad",
            // Descripción del ícono
            DESCRIPTION: "Descarga y sube archivos a la misma velocidad.",
            // Delay de animación (WOW.js)
            WOW_DELAY: ".5s",
        },
        {
            // ID interno del ícono
            id: "feature-stability",
            // Clase del ícono
            ICON_CLASS: "flaticon-wifi-router-2",
            // Título del ícono
            TITLE: "Mayor estabilidad",
            // Descripción del ícono
            DESCRIPTION: "Conexión 100% fibra óptica hasta tu hogar (FTTH).",
            // Delay de animación (WOW.js)
            WOW_DELAY: ".7s",
        },
    ],
    // ----- PREGUNTAS FRECUENTES -----
    FAQ: {
        // Título del bloque de FAQ
        TITLE: "Preguntas Frecuentes",
        // Lista de preguntas/respuestas
        ITEMS: HOME_PAGE_FAQ_ITEMS,
    },
    // ----- FOOTER -----
    FOOTER1: {
        // Logo del footer
        LOGO_SRC: "assets/img/logo/win-gamer.PNG",
        // Texto alternativo del logo
        LOGO_ALT: "WIN internet footer logo",
        // Texto antes del teléfono
        CALL_LABEL: "Llámanos al",
        // Texto de copyright
        COPYRIGHT_SUFFIX: "Todos los derechos reservados",
        // Ruta de la política de privacidad
        PRIVACY_PATH: "politica-privacidad",
        // Texto del enlace de privacidad
        PRIVACY_LABEL: "Política de Privacidad",
        // Líneas legales del footer
        META_LINES: [
            "“WIN” y su logotipo son marcas de WI-NET TELECOM S.A.C. (RUC 20521233991).",
            "Comercializamos Internet Hogar. No ofrecemos juegos ni apuestas.",
            "WI-NET TELECOM S.A.C. - Av. República de Panamá 3418-3420, Torre Barlovento, San Isidro, Lima · Central: (+51) 01 707 3000 · 0800 741 00 · contacto@win.pe",
        ],
    },
};

// ===================== EXPORT DE COMPATIBILIDAD (FAQ) =====================
// Export antiguo para componentes que aún lo usan
export const FAQ_ITEMS = HOME_PAGE_FAQ_ITEMS;
