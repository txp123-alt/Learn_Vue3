//对 Axios 进行二次封装， 目的是使用axios的响应和请求拦截器
import axios from "axios";
import {ElMessage} from "element-plus";

//使用 axios 对象的 create 方法，创建 axios 实例 。 同时可以配置(请求的基础路径，请求的超时时间)
let request = axios.create({
    //基础路径
    baseURL: import.meta.env.VITE_APP_BASE_API,
    //请求超时时间
    timeout: 5000
});

//给 axios 实例添加响应及请求拦截器
request.interceptors.request.use((config)=>{
    //config 对象有个请求头 headers

    //返回配置对象
    return config;
})

//给 axios 配置响应拦截器
request.interceptors.response.use(
    (respones)=>{
        //成功的回调
        //简化数据
        return respones.data
    },
    (error)=>{
        //失败的回调:处理http网络错误
        let message = '';
        let status = error.response.status;
        switch (status){
            case 401:
                message = "token 过期";
                break;
            case 403:
                message = "无权访问";
                break;
            case 404:
                message = "请求地址错误";
                break;
            case 500:
                message = "服务器异常";
                break;
            default:
                message = "网络出现问题";
                break;
        }
        //提示错误信息
        ElMessage({
            type:'error',
            message
        })

        //返回 Promise 对象，来终止 promise 链
        return Promise.reject(error)
    })

//对外暴露
export default request;
