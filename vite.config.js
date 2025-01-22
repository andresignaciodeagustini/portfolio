import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    force: true,
    exclude: ['@rollup/rollup-linux-x64-gnu'] // Excluimos el paquete problemático
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
    },
    rollupOptions: {
      external: ['@rollup/rollup-linux-x64-gnu'],
      output: {
        manualChunks: undefined
      }
    },
    target: 'es2015',
    minify: 'esbuild'
  }
})