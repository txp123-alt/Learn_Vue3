import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

//矢量图 SVG
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),createSvgIconsPlugin({
    iconDirs :[path.resolve(process.cwd(),'src/assets/icons')],
    symbolId :'icon-[dir]-[name]'
  })],
  resolve: {
    alias :{
      "@": path.resolve("./src") //相对路径别名设置
    }
  }
})
