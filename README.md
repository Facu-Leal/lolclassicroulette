# LoL Classic Builds 🎰

Sitio estático (Astro) con **builds NO convencionales para los 60 campeones de League of Legends Classic** (modo Season 3, sale el 29 de julio de 2026). Bilingüe (ES/EN), estilo retro Season 3, con **ruleta** que te sortea campeón + línea + build, y **SEO** completo (hreflang, sitemap, Open Graph, JSON-LD).

Static Astro site with off-meta builds for all 60 League of Legends Classic champions. Bilingual, retro theme, roulette, full SEO.

---

## 📁 Qué hay acá / What's inside

```
lol-classic-builds/
├─ src/
│  ├─ data/champions.js   ← las 60 builds (editá acá el contenido)
│  ├─ data/i18n.js        ← textos de interfaz ES/EN
│  ├─ layouts/Base.astro  ← <head> con todo el SEO
│  ├─ components/          ← Home, ChampCard, ChampionDetail, Roulette
│  └─ pages/               ← /es y /en (home, ruleta, campeones)
├─ public/                 ← favicon, imagen OG, robots.txt, sitemap.xml
├─ gen-sitemap.mjs         ← genera sitemap.xml antes del build
├─ astro.config.mjs        ← ⚠️ cambiá `site` por tu dominio
└─ dist/                   ← SITIO YA COMPILADO (listo para subir)
```

> La carpeta **`dist/`** ya está construida. Si solo querés publicar, subí esa carpeta (ver Opción A). Si querés editar y recompilar, seguí "Correr en local".

---

## ⚠️ Antes de publicar (1 minuto)

Cambiá la URL placeholder por tu dominio final en **dos** lugares:

1. `astro.config.mjs` → `site: 'https://TU-DOMINIO'`
2. `gen-sitemap.mjs` → `const BASE = 'https://TU-DOMINIO'`

(Y en `public/robots.txt` la línea `Sitemap:`.) Después recompilá con `npm run build`. Si usás el subdominio gratis que te da Netlify/Vercel, podés hacerlo después de crear el sitio, cuando ya sepas la URL.

---

## 🚀 Plan de publicación / How to publish

### Opción A — Netlify Drop (lo más rápido, sin cuenta técnica) ✅ *recomendado para empezar*

1. Entrá a **https://app.netlify.com/drop**
2. Arrastrá la carpeta **`dist/`** a la ventana.
3. Listo: te da una URL tipo `https://algo-random.netlify.app` en segundos.
4. (Opcional) Creá una cuenta gratis para renombrar el sitio, poner dominio propio y HTTPS automático.

Ideal para probar ya. Contra: cada actualización hay que volver a arrastrar `dist/`.

### Opción B — Netlify o Vercel conectado a GitHub ✅ *recomendado para mantenerlo*

Así, cada vez que edités y hagas `git push`, se recompila y publica solo.

1. Subí el proyecto a un repo de GitHub (sin `node_modules` ni `dist`, ya están en `.gitignore`).
2. En **Netlify** (*Add new site → Import from Git*) o **Vercel** (*New Project*):
   - **Build command:** `npm run build`
   - **Publish / Output directory:** `dist`
   - Framework: Astro (se autodetecta).
3. Deploy. Te da HTTPS y subdominio gratis; podés apuntar tu dominio propio.

Netlify y Vercel son equivalentes para esto; los dos tienen plan gratis suficiente. Si tu repo está en GitHub y no querés otra cuenta, también sirve **GitHub Pages** (Opción C).

### Opción C — GitHub Pages (100% dentro de GitHub)

1. En `astro.config.mjs`, si publicás en `usuario.github.io/repo`, agregá `base: '/repo'`.
2. Creá `.github/workflows/deploy.yml` con la [action oficial de Astro](https://docs.astro.build/en/guides/deploy/github/) (`withastro/action`).
3. En *Settings → Pages*, fuente: GitHub Actions.

> Recomendación: empezá con **A** para verlo online hoy; pasá a **B (Netlify o Vercel + GitHub)** cuando quieras que se actualice solo.

> 💡 **Para un sitio con publicidad, el mejor host gratuito es Cloudflare Pages** (ancho de banda ilimitado y permite sitios monetizados). Netlify también sirve. Evitá el plan gratis *Hobby* de **Vercel**: sus términos no permiten sitios comerciales/con ads.

---

## 💻 Correr en local / Run locally

Requiere Node 18+.

```bash
npm install
npm run dev      # http://localhost:4321  (abre /es o /en)
npm run build    # genera dist/  (corre gen-sitemap.mjs + astro build)
npm run preview  # previsualiza dist/
```

---

## ✏️ Editar builds / Edit builds

Todo el contenido de campeones vive en **`src/data/champions.js`**. Cada campeón tiene:
`lane` (top/jungle/mid/adc/support), `tier` (meme/sleeper/viable), y un objeto `build` con `name`, `items`, `masteries`, `runes`, `summoners` y `playstyle`, cada texto en `{ es, en }`. Agregá o cambiá lo que quieras y recompilá. Las descripciones de cada objeto están en `src/data/items.js`, y la guía de "cómo jugar" + el porqué de las maestrías por campeón en `src/data/guides.js`. El orden de habilidades (qué subir nivel por nivel + la justificación) está en `src/data/skills.js`.

---

## 🔎 SEO incluido

- Meta `title`/`description` por página e idioma.
- `hreflang` es / en / x-default (páginas equivalentes enlazadas).
- `canonical` limpio, Open Graph + Twitter Card, imagen OG (`/og-default.svg`).
- `sitemap.xml` con alternates + `robots.txt`.
- JSON-LD (`CollectionPage` en home, `HowTo` en cada build).

Tras publicar: subí el sitio a [Google Search Console](https://search.google.com/search-console) y enviá `https://TU-DOMINIO/sitemap.xml`.

---

*Sitio de fans, sin afiliación con Riot Games. League of Legends © Riot Games.*

---

## 🖼️ Imágenes (Data Dragon) / Images

Las imágenes vienen del **CDN oficial y gratuito de Riot (Data Dragon)** — no se guardan en el repo, se cargan por URL:

- **Campeones y hechizos de invocador:** versión actual (`16.14.1`).
- **Ítems:** versión **Season 3 (`3.15.5`)**, para que aparezcan los íconos originales de objetos que ya no existen (Deathfire Grasp, Atma's Impaler, Spirit of the Ancient Golem, etc.).

Todo el mapeo está en `src/data/assets.js` (`champId`, `spellFile`, `itemId`). Si Riot actualiza la versión, cambiá `DDRAGON_VER`. Cada imagen tiene un *fallback*: si un ícono no carga, se oculta y queda solo el texto (nunca se ve una imagen rota).

> Nota legal: Data Dragon es de uso público para proyectos de la comunidad. El sitio no está afiliado a Riot Games.

## 💰 Monetización — dos banners no intrusivos

El sitio tiene **dos banners laterales** (skyscrapers 160×600) que aparecen solo en pantallas anchas y se ocultan en móvil. Se configuran desde **`src/data/site.js`** y cada uno puede ser de 4 tipos, sin tocar código:

| `type` | Para qué | Qué poner |
| --- | --- | --- |
| `"none"` | Placeholder por defecto | nada |
| `"image"` | **Venta directa o afiliado** | `image` (ruta a tu imagen en `public/ads/`) + `href` (link) |
| `"html"` | **Cualquier red** (AdinPlay, Ezoic, etc.) | `html` con el código/embed que te dan |
| `"adsense"` | Google AdSense (opcional) | tu `client` y `slots` en `adsense` |

### Cómo cargar un banner propio o de afiliado (lo más rápido y limpio)

1. Poné tu imagen (160×600) en `public/ads/`, ej. `public/ads/banner-izq.png`.
2. En `src/data/site.js`:
   ```js
   left: {
     type: "image",
     image: "/ads/banner-izq.png",
     href: "https://www.eneba.com/...tu-link-de-afiliado",
     alt: "LoL keys en Eneba",
   },
   ```
3. `npm run build` y volvé a publicar.

Los links de banner salen con `rel="sponsored noopener noreferrer"` y `target="_blank"` (correcto para afiliados y SEO).

### Cómo usar una red de anuncios (cuando tengas tráfico)

Poné `type: "html"` y pegá el tag que te da la red en el campo `html`. Redes recomendadas para gaming, **sin Google**:

- **AdinPlay** — pensada para sitios de herramientas/gaming; barrera de entrada baja. *Recomendada.*
- **Snigel** — gaming/esports, buen RPM.
- **Ezoic** — sin mínimo de tráfico, arranca desde ya (podés limitarlo a estos 2 slots).
- Más adelante, con volumen: **Mediavine** (50k sesiones/mes) o **Raptive** (100k vistas/mes).

### Plan sugerido

Arrancá con **`type: "image"`** en los dos slots (venta directa a Discords/streamers + un afiliado de relleno como Eneba). Cuando pases ~10-30k visitas/mes, cambiá a **`type: "html"`** con AdinPlay o Ezoic para que se llenen solos. Cero scripts pesados hasta que valga la pena.

---

*Sitio de fans, sin afiliación con Riot Games. League of Legends © Riot Games.*
