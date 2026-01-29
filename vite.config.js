import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/inventory_dealer_draft/',
  server: {
    cors: {
      origin: true,
      credentials: true
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})