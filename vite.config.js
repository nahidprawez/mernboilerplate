import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: 'client',             // React source code lives here
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, 'client/dist'), // output build files here
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    open: true,
    // Proxy API requests to your Express backend in dev mode
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src'),  // optional path alias
    },
  },
});
