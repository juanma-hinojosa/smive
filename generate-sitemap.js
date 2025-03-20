/* eslint-disable no-undef */
import { writeFileSync } from 'fs';
import { join } from 'path';

const domain = 'https://tudominio.com';

const staticRoutes = [
  '/',
  '/projects',
  '/contact'
];

// Simulación de rutas dinámicas (esto debería venir de una API o base de datos)
const dynamicRoutes = [
  '/projects/amppya',
  '/projects/mecanotecnica',
  '/projects/toay',
  '/projects/quinta-bellos-momentos',
  '/projects/vicente-lopez',
  '/projects/el-dorado'
];

const allRoutes = [...staticRoutes, ...dynamicRoutes];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(route => `
    <url>
      <loc>${domain}${route}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    </url>
  `)
    .join('')}
</urlset>`;

writeFileSync(join(process.cwd(), 'public/sitemap.xml'), sitemapContent, 'utf8');

console.log('✅ Sitemap generado correctamente.');
