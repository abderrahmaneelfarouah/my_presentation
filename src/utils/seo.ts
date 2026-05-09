const baseUrl = 'https://www.abderrahmane-elfarouahfreelance.com';

// Routes avec priorités SEO ajustées selon la navigation principale
// Accueil (1.0) > Services, Réalisations, Contact (0.9) > About (0.6) > Légales (0.3)
const routes = [
  { path: '/', priority: '1.0', changeFreq: 'weekly' },
  { path: '/services', priority: '0.9', changeFreq: 'weekly' },
  { path: '/projects', priority: '0.9', changeFreq: 'weekly' },
  { path: '/contact', priority: '0.9', changeFreq: 'weekly' },
  { path: '/faq', priority: '0.8', changeFreq: 'monthly' }, // Featured snippets
  { path: '/zones-intervention', priority: '0.8', changeFreq: 'monthly' }, // SEO local
  { path: '/about', priority: '0.6', changeFreq: 'monthly' },
  { path: '/experience', priority: '0.5', changeFreq: 'monthly' },
  { path: '/mentions-legales', priority: '0.3', changeFreq: 'yearly' },
  { path: '/cgv', priority: '0.3', changeFreq: 'yearly' },
  { path: '/developpeur-angular-freelance', priority: '0.8', changeFreq: 'monthly' },
  { path: '/developpeur-laravel-freelance', priority: '0.8', changeFreq: 'monthly' },
  { path: '/creation-site-web-yvelines', priority: '0.8', changeFreq: 'monthly' },
  { path: '/applications-web-sur-mesure', priority: '0.8', changeFreq: 'monthly' },
  { path: '/blog', priority: '0.8', changeFreq: 'monthly' },
  { path: '/blog/pourquoi-angular-application-metier', priority: '0.7', changeFreq: 'monthly' },
  { path: '/blog/laravel-vs-nodejs-quel-choisir', priority: '0.7', changeFreq: 'monthly' },
  { path: '/blog/combien-coute-developpeur-freelance', priority: '0.7', changeFreq: 'monthly' },
  { path: '/blog/creer-application-web-sur-mesure', priority: '0.7', changeFreq: 'monthly' },
  { path: '/blog/seo-technique-optimiser-react', priority: '0.7', changeFreq: 'monthly' },
];

export function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changeFreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
}

export function generateRobotsTxt() {
  return `User-agent: *
Allow: /
Allow: /site-version.txt
Allow: /site-version.json

# Priorité pour les moteurs de recherche importants
User-agent: Googlebot
Allow: /
Allow: /site-version.txt
Allow: /site-version.json

User-agent: Bingbot
Allow: /
Allow: /site-version.txt
Allow: /site-version.json

# Bloquer les bots non désirés
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

# Fichiers à ne pas indexer
Disallow: /admin/
Disallow: /*.json$
Disallow: /*.xml$
Disallow: /api/

# Fichiers spéciaux
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/geo-sitemap.xml

# Délai de crawl (crawl-delay)
Crawl-delay: 1`;
}
