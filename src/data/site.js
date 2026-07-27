// Configuración del sitio y de los DOS banners laterales (no intrusivos).
// Site config + the TWO non-intrusive side banners.
//
// Cada banner (left / right) tiene un "type":
//   "none"    -> muestra un placeholder "Publicidad / Ad" (por defecto).
//   "image"   -> banner propio o de afiliado: una imagen que enlaza a una URL.
//                Ideal para venta directa o afiliados (Eneba, Amazon, etc.).
//   "html"    -> pegás el código/embed de cualquier red (AdinPlay, Ezoic, etc.)
//                o un <iframe>. Se inserta tal cual.
//   "adsense" -> usa la config de `adsense` de más abajo (por si algún día lo querés).
//
// Formato recomendado de imagen: 160 x 600 px (vertical / skyscraper).

// Link de afiliado de Eneba. Cambiá SOLO esta línea si algún día cambia tu ID.
const ENEBA_AFF = "https://www.eneba.com/?af_id=lolclassicroulette";

// Genera un banner vertical (160×600) con la estética del sitio para Eneba.
// `t` son los textos por idioma. Devuelve el HTML listo para insertar.
function enebaBanner(t) {
  return `<a href="${ENEBA_AFF}" target="_blank" rel="sponsored noopener noreferrer" aria-label="Eneba" style="display:flex;flex-direction:column;justify-content:space-between;width:160px;height:600px;padding:22px 16px;box-sizing:border-box;text-decoration:none;text-align:center;border:1px solid #785a28;background:radial-gradient(240px 140px at 50% 0%,rgba(10,200,185,.07),transparent 70%),linear-gradient(180deg,#0a1c28,#071019);box-shadow:inset 0 0 0 1px rgba(0,0,0,.5);">
  <div>
    <div style="font-size:.55rem;letter-spacing:2px;text-transform:uppercase;color:#785a28;font-family:'Cinzel',serif;">${t.ad}</div>
    <div style="margin-top:30px;font-size:1.9rem;line-height:1;">&#9876;</div>
    <div style="margin-top:22px;font-size:1.02rem;font-weight:700;line-height:1.25;color:#f0e6d2;font-family:'Cinzel',serif;">${t.title}</div>
    <div style="margin-top:14px;font-size:.72rem;line-height:1.45;color:#a09b8c;font-family:'Segoe UI',system-ui,sans-serif;">${t.sub}</div>
  </div>
  <div>
    <div style="font-size:1.35rem;font-weight:700;letter-spacing:2px;color:#c8aa6e;font-family:'Cinzel',serif;">ENEBA</div>
    <div style="margin-top:14px;padding:11px 8px;font-size:.7rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#10141c;border:1px solid #c8aa6e;background:linear-gradient(180deg,#f0e6d2,#c8aa6e 55%,#c89b3c);font-family:'Cinzel',serif;">${t.cta} &rarr;</div>
  </div>
</a>`;
}

const enebaHtml = {
  es: enebaBanner({ ad: "Publicidad", title: "RP y game keys al mejor precio", sub: "Skins, gift cards y juegos de PC con grandes descuentos.", cta: "Ver ofertas" }),
  en: enebaBanner({ ad: "Advertisement", title: "Cheap RP &amp; game keys", sub: "Skins, gift cards and PC games at big discounts.", cta: "Shop deals" }),
};

export const site = {
  // Email de contacto para publicidad (hover en los banners vacíos).
  contactEmail: { es: "contacto@lolclassicroulette.com", en: "contact@lolclassicroulette.com" },

  banners: {
    left: {
      type: "html",        // Eneba afiliado (banner propio con la estética del sitio).
      image: "",
      href: "",
      alt: "Eneba",
      html: enebaHtml,     // objeto { es, en } — el componente elige según el idioma.
    },
    right: {
      type: "html",
      image: "",
      href: "",
      alt: "Eneba",
      html: enebaHtml,
    },
  },

  // Opcional: solo si alguna vez usás Google AdSense (type "adsense").
  adsense: {
    enabled: false,
    client: "ca-pub-XXXXXXXXXXXXXXXX",
    slots: { left: "0000000000", right: "0000000000" },
  },
};
