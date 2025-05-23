import { createApp } from 'vue'
// import './style.css' 注释自带的样式， 写项目时不需要
import App from '@/App.vue'

//引入 Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn' //国际化的配置

const app = createApp(App);

app.use(ElementPlus,{
    locale: zhCn
})

// console.log(import.meta.env)  //测试获取当前的环境变量
app.mount('#app')
