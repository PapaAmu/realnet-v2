// scripts/generate-sitemap.js
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const BASE_URL = 'https://realnet-web.co.za';

const pages = [
  { url: '/', priority: 1.0, changefreq: 'monthly' },
  { url: '/features/web-development', priority: 0.9, changefreq: 'monthly' },
  { url: '/features/mobile-app-development', priority: 0.9, changefreq: 'monthly' },
  { url: '/features/software-development', priority: 0.9, changefreq: 'monthly' },
  { url: '/features/hosting-and-mails', priority: 0.9, changefreq: 'monthly' },
  { url: '/contact-us', priority: 0.8, changefreq: 'yearly' }
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

  const filePath = resolve('public', 'sitemap.xml');
  writeFileSync(filePath, sitemap);
  console.log(' Sitemap generated at public/sitemap.xml');
};

generateSitemap();