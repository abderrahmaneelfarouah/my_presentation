const fs = require('fs');

async function generateSEOFiles() {
  const { generateSitemap, generateRobotsTxt } = await import('./src/utils/seo.ts');

  fs.writeFileSync('dist/sitemap.xml', generateSitemap());
  fs.writeFileSync('dist/robots.txt', generateRobotsTxt());

  console.log('✅ SEO files generated for Vercel (synced with src/utils/seo.ts)');
  console.log('📅 Date:', new Date().toISOString().split('T')[0]);
}

generateSEOFiles().catch((error) => {
  console.error('❌ Error:', error);
  process.exit(1);
});
