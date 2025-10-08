// scripts/generate-sitemap.js
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const BASE_URL = 'https://realnet-web.co.za';

const pages = [
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/features/web-development', priority: 0.9, changefreq: 'monthly' },
  { url: '/features/web-development/starter-website-quote', priority: 0.8, changefreq: 'monthly' },
  { url: '/features/web-development/ecommerce-website-quote', priority: 0.8, changefreq: 'monthly' },
  { url: '/features/web-development/custom-website-quote', priority: 0.8, changefreq: 'monthly' },
  { url: '/features/web-development/live-projects', priority: 0.9, changefreq: 'weekly' },
  { url: '/features/mobile-app-development', priority: 0.9, changefreq: 'monthly' },
  { url: '/features/software-development', priority: 0.9, changefreq: 'monthly' },
  { url: '/features/hosting-and-mails', priority: 0.9, changefreq: 'monthly' },
  { url: '/resources', priority: 0.8, changefreq: 'weekly' },
  { url: '/new-project/request-quotation', priority: 0.8, changefreq: 'monthly' },
  { url: '/contact-us', priority: 0.7, changefreq: 'yearly' },
  { url: '/about-us', priority: 0.7, changefreq: 'yearly' },
  { url: '/popia-act', priority: 0.7, changefreq: 'yearly' },
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
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
  console.log('✅ Sitemap generated at public/sitemap.xml');
};

generateSitemap();