import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Gunakan './' agar path relatif
  build: {
    outDir: "dist", // Direktori hasil build
  },
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:5000',// Proxy tidak diperlukan jika tidak menggunakan backend
    },
  },
});
