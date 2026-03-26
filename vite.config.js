import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Keep paths portable for GitHub Pages + custom domains.
  // Asset URLs become relative to the served HTML.
  base: './',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
