import {req} from '../../api/request'
//登录接口
export function login(query){
    return req({
        url:'/home/multidata',
        method:'get',
        params:query
    })
}