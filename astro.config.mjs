import { defineConfig } from 'astro/config';

// IMPORTANT: cambia esta URL por tu dominio final antes de publicar.
// IMPORTANT: change this URL to your final domain before publishing.
export default defineConfig({
  site: 'https://lolclassicroulette.com',
  output: 'static',
  trailingSlash: 'ignore',
});
