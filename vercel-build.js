import fs from 'fs';
import { generateSitemap, generateRobotsTxt } from './src/utils/seo.js';

async function generateSEOFiles() {
  try {
    fs.writeFileSync('dist/sitemap.xml', generateSitemap());
    fs.writeFileSync('dist/robots.txt', generateRobotsTxt());

    console.log('✅ SEO files generated for Vercel (synced with src/utils/seo.ts)');
    console.log('📅 Date:', new Date().toISOString().split('T')[0]);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

generateSEOFiles();