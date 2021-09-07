
import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import {login} from './api'
import store from 'store'
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
            console.log(response);
            store.set('user', { name:'aiguo' })
            this.props.history.replace('/home',{username:'aiguo.cheng'})
        }catch(err){
            console.log(err);
        }
    }
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    render() {
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
