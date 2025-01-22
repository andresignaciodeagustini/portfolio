import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    force: true,
    exclude: ['react-dnd', 'react-dnd-html5-backend'] // Excluye paquetes problemáticos si los hay
  },
  server: {
    hmr: true,
    watch: {
      usePolling: true
    },
    force: true
  },
  build: {
    sourcemap: true,
    commonjsOptions: {
      include: []
    }
  }
})