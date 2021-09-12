import React, { Component } from 'react'
import mymoneryUtils from '../../utils/mymoneryUtils';
import {Redirect,Switch,Route} from 'react-router-dom'
import { Layout,Breadcrumb } from 'antd';
import LeftNav from '../left-nav'
import Home from '../home' //首页
import Commodity from '../commodity' // 品类管理
import Product from '../product'
import User from '../user' //用户管理
import Role from '../role' //角色管理
import Bar from '../echarts/bar'// 树状图
import Line from '../echarts/line'// 折线图
import Pie from '../echarts/pie'// 饼图
import Order from '../order'//订单管理
import './index.less'

const { Header, Content, Footer, Sider } = Layout;


export default class Admin extends Component {
    
    render() {
        const {user} = mymoneryUtils
        if(!user || !user.userId){
            //如果内存中没有用户信息就跳转到登录页面
            return <Redirect to='/login' />
        }
        return (
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider><LeftNav /></Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            头部
                        </Header>
                        <Breadcrumb style={{padding: 24 }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ margin: '0 16px' }}>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 400 }}>
                                <Switch>
                                    <Route path='/home' component={Home} />
                                    <Route path='/commodity' component={Commodity} />
                                    <Route path='/product' component={Product} />
                                    <Route path='/user' component={User} />
                                    <Route path='/role' component={Role} />
                                    <Route path='/echarts/bar' component={Bar} />
                                    <Route path='/echarts/line' component={Line} />
                                    <Route path='/echarts/pie' component={Pie} />
                                    <Route path='/order' component={Order} />
                                    <Redirect to='/home' /> 
                                </Switch>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>    
            </div>
        )
    }
}
