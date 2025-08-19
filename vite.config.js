import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

import path from "path"

// https://vite.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "~":path.resolve(__dirname,"src")
    } //设置别名~为src
  },
  server:{
    proxy:{
      '/api':{
        target:'http://ceshi13.dishait.cn',
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/,'')
      }
    },
  },
  plugins: [vue(),WindiCSS()],
})
