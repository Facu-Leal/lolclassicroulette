// Páginas informativas/legales (bilingües): Privacidad, Acerca de, Contacto.
// Content for the info/legal pages (Privacy, About, Contact).
import { site } from "./site.js";

const EMAIL = { es: site.contactEmail.es, en: site.contactEmail.en };
const UPDATED = "29 jul 2026"; // fecha de última actualización / last updated

// Slugs de ruta por idioma. / Route slugs per language.
export const pageRoutes = {
  privacy: { es: "privacidad", en: "privacy" },
  about: { es: "acerca", en: "about" },
  contact: { es: "contacto", en: "contact" },
};

export function pageUrl(lang, key) {
  return `/${lang}/${pageRoutes[key][lang]}`;
}

// Etiquetas cortas para el footer. / Short labels for the footer.
export const pageLabels = {
  es: { about: "Acerca de", contact: "Contacto", privacy: "Privacidad", updated: "Última actualización" },
  en: { about: "About", contact: "Contact", privacy: "Privacy", updated: "Last updated" },
};

const ADS_SETTINGS = "https://www.google.com/settings/ads";
const ABOUT_ADS = "https://www.aboutads.info/choices/";

export const pages = {
  privacy: {
    es: {
      title: "Política de Privacidad",
      updated: UPDATED,
      desc: "Cómo LoL Classic Builds usa cookies, publicidad, enlaces de afiliado y analítica anónima.",
      sections: [
        { h: "Resumen", p: [
          "LoL Classic Builds es un sitio informativo gratuito. No te pedimos ni guardamos datos personales de forma directa: no hay registro, cuentas ni inicio de sesión. Esta política explica qué recopilan los servicios de terceros que usamos (publicidad y analítica) y cómo podés controlarlo.",
        ] },
        { h: "Cookies y publicidad", p: [
          "Este sitio puede mostrar anuncios a través de <strong>Google AdSense</strong>. Los proveedores externos, incluido Google, usan cookies para mostrar anuncios en función de tus visitas anteriores a este y otros sitios web.",
          "El uso de cookies de publicidad por parte de Google (incluida la cookie <em>DART</em>) le permite a él y a sus socios mostrarte anuncios según tu visita a este sitio y a otros de internet.",
          `Podés desactivar la publicidad personalizada desde la <a href="${ADS_SETTINGS}" target="_blank" rel="noopener">Configuración de anuncios de Google</a>, o rechazar las cookies de proveedores externos en <a href="${ABOUT_ADS}" target="_blank" rel="noopener">aboutads.info/choices</a>. También podés bloquear o borrar cookies desde tu navegador.`,
        ] },
        { h: "Enlaces de afiliado", p: [
          "Algunos enlaces del sitio (por ejemplo, a <strong>Eneba</strong>) son enlaces de afiliado. Si comprás a través de ellos, podemos recibir una pequeña comisión <strong>sin costo adicional para vos</strong>. Esto ayuda a mantener el sitio online.",
        ] },
        { h: "Analítica", p: [
          "Usamos <strong>Cloudflare Web Analytics</strong> para medir el tráfico de forma agregada. Es una analítica orientada a la privacidad: <strong>no usa cookies</strong> ni recopila datos personales que te identifiquen.",
        ] },
        { h: "Contenido de terceros", p: [
          "Las imágenes de campeones, objetos y hechizos se cargan desde el CDN oficial de Riot Games (Data Dragon). No alojamos esas imágenes; se sirven directamente desde los servidores de Riot.",
        ] },
        { h: "Tus derechos (RGPD / CCPA)", p: [
          "Si estás en el Espacio Económico Europeo, el Reino Unido o California, tenés derecho a consentir o rechazar la publicidad personalizada. Podés ejercerlo desde la Configuración de anuncios de Google y desde los ajustes de cookies de tu navegador. Como el sitio no almacena datos personales propios, no guardamos información que puedas solicitar eliminar de nuestra parte.",
        ] },
        { h: "Menores", p: [
          "Este sitio no está dirigido a menores de 13 años y no recopila datos de forma consciente de ellos.",
        ] },
        { h: "Cambios", p: [
          "Podemos actualizar esta política cada tanto. La fecha de arriba indica la última modificación.",
        ] },
        { h: "Contacto", p: [
          `¿Dudas sobre esta política? Escribinos a <a href="mailto:${EMAIL.es}">${EMAIL.es}</a>.`,
        ] },
      ],
    },
    en: {
      title: "Privacy Policy",
      updated: UPDATED,
      desc: "How LoL Classic Builds uses cookies, advertising, affiliate links and privacy-first analytics.",
      sections: [
        { h: "Overview", p: [
          "LoL Classic Builds is a free informational site. We do not ask for or store personal data directly: there is no registration, account or login. This policy explains what the third-party services we use (advertising and analytics) collect, and how you can control it.",
        ] },
        { h: "Cookies and advertising", p: [
          "This site may display ads through <strong>Google AdSense</strong>. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this and other websites.",
          "Google's use of advertising cookies (including the <em>DART</em> cookie) enables it and its partners to serve ads to you based on your visit to this site and/or other sites on the internet.",
          `You may opt out of personalized advertising via <a href="${ADS_SETTINGS}" target="_blank" rel="noopener">Google Ads Settings</a>, or opt out of third-party vendor cookies at <a href="${ABOUT_ADS}" target="_blank" rel="noopener">aboutads.info/choices</a>. You can also block or delete cookies from your browser.`,
        ] },
        { h: "Affiliate links", p: [
          "Some links on this site (for example, to <strong>Eneba</strong>) are affiliate links. If you buy through them, we may earn a small commission <strong>at no extra cost to you</strong>. This helps keep the site online.",
        ] },
        { h: "Analytics", p: [
          "We use <strong>Cloudflare Web Analytics</strong> to measure traffic in aggregate. It is privacy-first analytics: it <strong>does not use cookies</strong> and does not collect personally identifying data.",
        ] },
        { h: "Third-party content", p: [
          "Champion, item and spell images are loaded from Riot Games' official CDN (Data Dragon). We do not host those images; they are served directly from Riot's servers.",
        ] },
        { h: "Your rights (GDPR / CCPA)", p: [
          "If you are in the European Economic Area, the UK or California, you have the right to consent to or decline personalized advertising. You can exercise this via Google Ads Settings and your browser's cookie settings. Because the site stores no personal data of its own, we hold no information for you to request deletion of on our side.",
        ] },
        { h: "Children", p: [
          "This site is not directed to children under 13 and does not knowingly collect data from them.",
        ] },
        { h: "Changes", p: [
          "We may update this policy from time to time. The date above shows the last change.",
        ] },
        { h: "Contact", p: [
          `Questions about this policy? Email us at <a href="mailto:${EMAIL.en}">${EMAIL.en}</a>.`,
        ] },
      ],
    },
  },

  about: {
    es: {
      title: "Acerca de",
      desc: "Qué es LoL Classic Builds: un proyecto de fans con builds off-meta, guías y ruleta para League of Legends Classic.",
      sections: [
        { h: "Qué es esto", p: [
          "LoL Classic Builds es un proyecto de fans dedicado al modo <strong>League of Legends Classic</strong>. Reunimos builds no convencionales para los antiguos campeones del modo — AP Yi, GP AP, one-shots, picks de ADC y mucho más — con guía de cómo jugar, objetos, runas, maestrías y orden de habilidades para cada una. Y una ruleta que te sortea campeón, línea y build para tu próxima partida.",
        ] },
        { h: "Por qué lo hicimos", p: [
          "Somos el equipo de LoL Classic Builds: jugadores a los que nos marcó la vieja escuela y quisimos armar un lugar simple y divertido para experimentar con lo más troll de esos años, sin la seriedad del meta. La idea es que entres, gires la ruleta y te rías probando algo distinto.",
        ] },
        { h: "Colaborá", p: [
          `¿Tenés una build que deberíamos agregar, o encontraste algo para corregir? Nos encanta recibir sugerencias. Escribinos a <a href="mailto:${EMAIL.es}">${EMAIL.es}</a>.`,
        ] },
        { h: "Aviso legal", p: [
          "Este es un sitio de fans <strong>independiente</strong>, sin afiliación, respaldo ni patrocinio de Riot Games. League of Legends y todos los recursos relacionados son propiedad de © Riot Games, Inc.",
        ] },
      ],
    },
    en: {
      title: "About",
      desc: "What LoL Classic Builds is: a fan project with off-meta builds, guides and a roulette for League of Legends Classic.",
      sections: [
        { h: "What this is", p: [
          "LoL Classic Builds is a fan project dedicated to the <strong>League of Legends Classic</strong> mode. We collect off-meta builds for the mode's old champions — AP Yi, AP GP, one-shots, ADC picks and much more — each with a how-to-play guide, items, runes, masteries and skill order. Plus a roulette that rolls you a champion, lane and build for your next game.",
        ] },
        { h: "Why we made it", p: [
          "We're the LoL Classic Builds team: players shaped by the old school who wanted a simple, fun place to experiment with the trolliest picks of those years, without the seriousness of the meta. The idea is that you drop in, spin the wheel and have a laugh trying something different.",
        ] },
        { h: "Contribute", p: [
          `Got a build we should add, or spotted something to fix? We love suggestions. Email us at <a href="mailto:${EMAIL.en}">${EMAIL.en}</a>.`,
        ] },
        { h: "Legal notice", p: [
          "This is an <strong>independent</strong> fan site, not affiliated with, endorsed or sponsored by Riot Games. League of Legends and all related assets are property of © Riot Games, Inc.",
        ] },
      ],
    },
  },

  contact: {
    es: {
      title: "Contacto",
      desc: "Contactá al equipo de LoL Classic Builds para sugerir builds, reportar errores o consultar por publicidad.",
      sections: [
        { h: "Escribinos", p: [
          `La mejor forma de contactarnos es por email: <a href="mailto:${EMAIL.es}"><strong>${EMAIL.es}</strong></a>.`,
        ] },
        { h: "¿Para qué escribir?", p: [
          "Sugerir una build nueva o mejorar una existente. Reportar un error, un dato desactualizado o una imagen que no carga. Consultas sobre publicidad o colaboraciones.",
        ] },
        { h: "Respuesta", p: [
          "Somos un proyecto chico de fans, así que respondemos cuando podemos — gracias por la paciencia. Toda sugerencia para mejorar el sitio es bienvenida.",
        ] },
      ],
    },
    en: {
      title: "Contact",
      desc: "Contact the LoL Classic Builds team to suggest builds, report errors or ask about advertising.",
      sections: [
        { h: "Get in touch", p: [
          `The best way to reach us is by email: <a href="mailto:${EMAIL.en}"><strong>${EMAIL.en}</strong></a>.`,
        ] },
        { h: "What to write about", p: [
          "Suggest a new build or improve an existing one. Report an error, outdated info or an image that won't load. Advertising or collaboration inquiries.",
        ] },
        { h: "Response", p: [
          "We're a small fan project, so we reply when we can — thanks for your patience. Any suggestion to improve the site is welcome.",
        ] },
      ],
    },
  },
};
