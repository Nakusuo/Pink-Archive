/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  /* Rutas relativas: el sitio vive en nakusuo.github.io/Pink-Archive/ y con
     HashRouter nunca cambia la ruta del documento, así que './' sirve igual
     en local, en Pages o si mañana se renombra el repositorio. */
  base: './',
  test: {
    environment: 'node',
  },
})
