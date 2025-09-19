import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// If VITE_BASE is set (in build:gh script), use it. Otherwise default to "/"
const basePath = process.env.VITE_BASE || '/';

export default defineConfig({
  plugins: [react()],
  base: basePath, // ✅ Correct base handling

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    target: 'esnext',
    outDir: 'dist',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor.react';
            return 'vendor';
          }
        },
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },
});
