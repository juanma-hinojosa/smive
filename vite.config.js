import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Asegura que el `base` está correctamente definido
  server: {
    historyApiFallback: true, // Permite que el frontend maneje las rutas
  },
})
