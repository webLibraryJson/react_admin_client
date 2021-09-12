import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import store from '../src/utils/storageUtils' //存储在localStorage中的用户信息
import mymoneryUtils from '../src/utils/mymoneryUtils'; //存储在内存中的数据
const user = store.getUser();
if(user){
  //刷新页面把localStorage中的数据赋值给内存中
  mymoneryUtils.user = user
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);
