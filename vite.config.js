import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages sirve el sitio en /My-Portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/My-Portfolio/',
})
