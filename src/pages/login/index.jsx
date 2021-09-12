
import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import {Redirect} from 'react-router-dom'
import {login} from './api'
import store from '../../utils/storageUtils'
import mymoneryUtils from '../../utils/mymoneryUtils';
import './index.less'

export default class Login extends Component {
    
    onFinish = async (values) => {
        const {username,password} = values
        console.log(username,password);
        let params = {
            username:username,
            password:password
        }
        try{
            const response = await login(params) //请求成功的回调
            const userobj = {
                userName:"chengaiguo",
                userId:"001002"
            }
            store.setUser(userobj) //保存到localStorage中
            mymoneryUtils.user = userobj //保存到内存中
            this.props.history.replace('/admin',{username:'aiguo.cheng'})
        }catch(err){
            console.log(err);
        }
    }
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    render() {
        const {user} = mymoneryUtils
        if(user && user.userId){
            //如果有登录信息就跳转到首页
            return <Redirect to='/admin' />
        }
        return (
            <div className='loginBox'>
                <div className='formbox'>
                <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                        登录
                        </Button>
                    </Form.Item>
                </Form>
                </div>
            </div>
        )
    }
}
