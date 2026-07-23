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

export const site = {
  banners: {
    left: {
      type: "none",
      // --- para type "image" ---
      image: "",            // ej: "/ads/mi-banner-izq.png"  (poné el archivo en public/ads/)
      href: "",             // ej: "https://www.eneba.com/..?afiliado=TU_ID"
      alt: "Publicidad",
      // --- para type "html" ---
      html: "",             // ej: "<script>...código de AdinPlay/Ezoic...</script>"
    },
    right: {
      type: "none",
      image: "",
      href: "",
      alt: "Publicidad",
      html: "",
    },
  },

  // Opcional: solo si alguna vez usás Google AdSense (type "adsense").
  adsense: {
    enabled: false,
    client: "ca-pub-XXXXXXXXXXXXXXXX",
    slots: { left: "0000000000", right: "0000000000" },
  },
};
