import { defineConfig } from 'vite'

export default defineConfig({
  root: './',
  server: {
    open: true,
    port: 8083,
    host: '0.0.0.0'
  },
  // 构建配置
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
