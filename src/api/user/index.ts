//用户相关接口
import request from '@/utils/request.ts'
import type {loginForm,loginResponseData, userResponseData} from '@/api/user/type.ts'

//统一管理接口
enum API {
    LOGIN_UEL = "/user/login",
    USERINFO_URL = "/user/info"
}

//对外暴露接口
export const reqLogin = (data:loginForm) => request.post<any,loginResponseData>(API.LOGIN_UEL,data);

//获取用户信息
export const reqUserInfo = () => request.get<any,userResponseData>(API.USERINFO_URL);