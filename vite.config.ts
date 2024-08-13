// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['storybook-addon-swc'],
  },
  build: {
    rollupOptions: {
      plugins: [require('rollup-plugin-swc')],
    },
  },
});
