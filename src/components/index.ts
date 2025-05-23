//引入项目中全部的全局组件
import SvgIcon from '@/components/SvgIcon/index.vue'

//声明全局对象
const allGloablComponment = {SvgIcon}

//对外暴露插件对象
export default {
    //只要这个文件在vue初始化时（main.ts）被注册了，那么就会运行这个方法
    install(app){
        //将全局组件注册到Vue
        Object.keys(allGloablComponment).forEach(key =>{
            app.component(key,allGloablComponment[key])
        })
    }
}