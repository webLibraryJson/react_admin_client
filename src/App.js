import React, { Component } from 'react'
import {Button,message,Input} from 'antd'
// import 'antd/dist/antd.css';
// import 'antd/dist/antd.less';

export default class App extends Component {
  sumbit = () =>{
    message.success('提交成功');
  }
  render() {
    return (
      <div>
        <Input placeholder="Basic usage" />
        <Button type="primary" onClick={this.sumbit}>提交</Button>
      </div>
      
    )
  }
}

