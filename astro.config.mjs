import { defineConfig } from 'astro/config';

// IMPORTANT: cambia esta URL por tu dominio final antes de publicar.
// IMPORTANT: change this URL to your final domain before publishing.
export default defineConfig({
  site: 'https://lolclassicroulette.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    // Genera /pagina.html (servida como /pagina, SIN barra final) en vez de
    // /pagina/index.html. Así la URL servida coincide con la canonical y el sitemap.
    format: 'file',
  },
});
