import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { contentPlugin } from './scripts/vite-plugin-content';

// https://vite.dev
export default defineConfig({
  plugins: [react(), contentPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Reproduce Jekyll's sass_dir: _sass so agency.scss's bare imports
        // ("base/variables.scss", "bootstrap/scss/bootstrap.scss") resolve.
        loadPaths: [path.resolve(__dirname, 'styles/_sass')],
        quietDeps: true,
        silenceDeprecations: ['import', 'global-builtin', 'color-functions'],
      },
    },
  },
  build: {
    outDir: 'out',
    assetsDir: 'assets/build',
    // The post-bodies chunk (the whole blog corpus as pre-rendered HTML) is
    // deliberately large and lazily loaded only on post pages.
    chunkSizeWarningLimit: 900,
  },
});
