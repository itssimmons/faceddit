import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    base: './',
    server: {
      port: 1234,
      open: true,
      cors: true,
      proxy: {
        "/giphy": {
          target: "https://api.giphy.com",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/giphy/, '') 
        }
      }
    }
  })
}