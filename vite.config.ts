// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/", // Update this if using subdomain hosting
  build: {
    outDir: 'dist',
  },
})
