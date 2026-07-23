import { defineConfig } from 'astro/config';

// IMPORTANT: cambia esta URL por tu dominio final antes de publicar.
// IMPORTANT: change this URL to your final domain before publishing.
export default defineConfig({
  site: 'https://lolclassicbuilds.netlify.app',
  output: 'static',
  trailingSlash: 'ignore',
});
