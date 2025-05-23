import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

//矢量图 SVG
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";


// https://vite.dev/config/
export default defineConfig({
  //1. 配置SVG
  plugins: [vue(),createSvgIconsPlugin({
    iconDirs :[path.resolve(process.cwd(),'src/assets/icons')],
    symbolId :'icon-[dir]-[name]'
  })],
  //2. 相对路径别名设置
  resolve: {
    alias :{
      "@": path.resolve("./src")
    }
  },
  //3. scss样式全局变量配置
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "@/styles/variable.scss";' // 修正后的导入语法
      }
    }
  }
})
