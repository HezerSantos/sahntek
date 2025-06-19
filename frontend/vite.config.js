import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
    build: {
    minify: 'esbuild',
    sourcemap: true,
    esbuild: {
      drop: ['console', 'debugger']
    }
  },
  server: {
    allowedHosts: ['d180-75-48-60-225.ngrok-free.app'],
    port: 5173,
    host: '0.0.0.0'
  },

})
