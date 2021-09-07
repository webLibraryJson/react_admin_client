import axios from 'axios'
export function req(config){
    const server = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000,
        withCredentials:true,
    })
    //         //发送请求拦截
    server.interceptors.request.use(config =>{
            return config //参数处理完后还得return返回所以参数 
            // 1、比如config中的一些信息不符合服务器的要求
            // 2、比如每次发送网络请求时，都希望在界面中显示一个请求的图标，在响应拦截中关闭掉这个图标
            // 3、某些网络请求（比如登录(token)),必须携带一些特殊的信息
        },err =>{
    })
    //响应拦截
    server.interceptors.response.use(res =>{  //res成功响应
        return res;  //结果处理完后还得的返回
    },err =>{ //err失败的响应
        return Promise.reject(err); 
    })    
                   
    return server(config);
}
