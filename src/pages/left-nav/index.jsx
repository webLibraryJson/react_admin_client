/* 左边侧边栏导航 */
import React, { Component } from 'react'
import { Menu } from 'antd';
import {Link} from 'react-router-dom'
import {
    DesktopOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import './index.less'
const { SubMenu } = Menu;

export default class LeftNav extends Component {
    render() {
        return (
            <div>
                <div className="logo">React后台管理系统</div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<DesktopOutlined />}>
                        <Link to='/home'>首页</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="商品">
                        <Menu.Item key="7"><Link to='/commodity'>品类管理</Link></Menu.Item>
                        <Menu.Item key="8"><Link to='/product'>商品管理</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="3" icon={<DesktopOutlined />}>
                        <Link to='/user'>用户管理</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<DesktopOutlined />}>
                        <Link to='/role'>角色管理</Link>
                    </Menu.Item>
                    <SubMenu key="sub2" icon={<UserOutlined />} title="图形图表">
                        <Menu.Item key="10"><Link to='/echarts/bar'>树状图</Link></Menu.Item>
                        <Menu.Item key="11"><Link to='/echarts/line'>折线图</Link></Menu.Item>
                        <Menu.Item key="12"><Link to='/echarts/pie'>饼图</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="6" icon={<DesktopOutlined />}>
                        <Link to='/order'>订单管理</Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}
