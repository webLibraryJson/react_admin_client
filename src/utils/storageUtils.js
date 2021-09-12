import store from 'store'
const USER_KEY = "user_key"
/* 进行local数据的保存 */
export default{
    //写入user
    setUser(data){
        store.set(USER_KEY,data);
    },
    //读取user
    getUser(){
        return store.get(USER_KEY);
    },
    //移出user
    removeUser(){   
        store.remove(USER_KEY);
    }
}