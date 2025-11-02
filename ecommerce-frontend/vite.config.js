import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ✅ Vite + React + Tailwind Configuration
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: '0.0.0.0',   // Allow access from LAN or other devices
    port: 3000,        // Frontend on port 3000
    open: true,        // Automatically open browser on run
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
