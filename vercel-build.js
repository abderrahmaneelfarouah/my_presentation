import fs from 'fs';

async function generateSEOFiles() {
  try {
    try {
      // Try to import from .ts file
      const { generateSitemap, generateRobotsTxt } = await import('./src/utils/seo.ts');
      fs.writeFileSync('dist/sitemap.xml', generateSitemap());
      fs.writeFileSync('dist/robots.txt', generateRobotsTxt());
      console.log('✅ SEO files generated for Vercel (synced with src/utils/seo.ts)');
      console.log('📅 Date:', new Date().toISOString().split('T')[0]);
    } catch (importError) {
      console.warn('⚠️ Warning: Could not import SEO utilities from src/utils/seo.ts');
      console.warn('   Error:', importError instanceof Error ? importError.message : String(importError));
      console.warn('   SEO generation skipped - build will continue');
    }
  } catch (error) {
    console.error('❌ Error:', error);
    // Don't exit with failure - allow build to continue
    process.exit(0);
  }
}

await generateSEOFiles();
