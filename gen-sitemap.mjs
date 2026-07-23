import { allBuilds } from './src/data/allBuilds.js';
import { writeFileSync } from 'node:fs';

const BASE = 'https://lolclassicroulette.com'; // cambiar por tu dominio
const pairs = [
  { es: '/es', en: '/en' },
  { es: '/es/ruleta', en: '/en/roulette' },
  ...allBuilds.map(c => ({ es: `/es/campeon/${c.slug}`, en: `/en/champion/${c.slug}` })),
];

const esc = (s) => s.replace(/&/g, '&amp;');
let body = '';
for (const p of pairs) {
  for (const lang of ['es', 'en']) {
    body += `  <url>\n    <loc>${BASE}${p[lang]}</loc>\n`;
    body += `    <xhtml:link rel="alternate" hreflang="es" href="${BASE}${p.es}"/>\n`;
    body += `    <xhtml:link rel="alternate" hreflang="en" href="${BASE}${p.en}"/>\n`;
    body += `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}${p.es}"/>\n`;
    body += `    <changefreq>weekly</changefreq>\n  </url>\n`;
  }
}
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}</urlset>\n`;
writeFileSync('./public/sitemap.xml', xml);
console.log('sitemap.xml:', pairs.length * 2, 'urls');
