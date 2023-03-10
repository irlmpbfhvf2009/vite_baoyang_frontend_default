import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    open: true,
    port: 3000,
    proxy: {
      '/api' : {
        target: 'http://127.0.0.1:9090/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/,'')
      },
    },
  },
})
