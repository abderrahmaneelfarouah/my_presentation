import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// SEO generation hook - improved with better error handling
function generateSEOFiles() {
  try {
    // Create dist directory if it doesn't exist
    const distDir = path.join(__dirname, 'dist');
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }

    // Import SEO utilities dynamically
    import('./src/utils/seo.ts')
      .then(({ generateSitemap, generateRobotsTxt }) => {
        try {
          const sitemap = generateSitemap();
          const robots = generateRobotsTxt();
          
          fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
          fs.writeFileSync(path.join(distDir, 'robots.txt'), robots);
          
          console.log('✅ SEO files updated automatically!');
        } catch (writeError) {
          console.warn('⚠️ Warning: Could not write SEO files:', writeError instanceof Error ? writeError.message : String(writeError));
        }
      })
      .catch(importError => {
        console.warn('⚠️ Warning: SEO generation module not found or failed to import:', importError instanceof Error ? importError.message : String(importError));
      });
  } catch (error) {
    console.warn('⚠️ Warning: SEO generation setup failed:', error instanceof Error ? error.message : String(error));
    // Continue build even if SEO generation fails
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Set this to your repository name if deploying to GitHub Pages or a subdirectory
  plugins: [
    TanStackRouterVite(),
    react(),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240, // Seuil de compression (10KB)
      deleteOriginFile: false
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
      deleteOriginFile: false
    }),
    {
      name: 'seo-generator',
      writeBundle() {
        generateSEOFiles();
      }
    }
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    chunkSizeWarningLimit: 1000,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', '@tanstack/react-router']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false
      }
    }
  }
});
