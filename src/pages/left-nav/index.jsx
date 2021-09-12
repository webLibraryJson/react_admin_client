/* 左边侧边栏导航 */
import React, { Component } from 'react'
import { Menu } from 'antd';
import {Link,withRouter} from 'react-router-dom'
import './index.less'
import menuList from '../../config/menuConfig'  
const { SubMenu } = Menu;
class LeftNav extends Component {
    getMenuList = (menuListData) =>{
        const path = this.props.location.pathname
        return (
//map的方法 + 递归
            menuListData.map(item =>{
                // 如果没有children
                if(!item.children){
                    return(
                        <Menu.Item key={item.key} icon={item.icon}>
                            <Link to={item.key}>{item.title}</Link>
                        </Menu.Item>
                    )
                }else{
                    //判断哪个模块展开
                    const cItem = item.children.find(citem => citem.key === path)
                    if(cItem){
                        this.openKey = item.key
                    }
                    return(
                        <SubMenu key={item.key} icon={item.icon} title={item.title}>
                            {this.getMenuList(item.children)}
                        </SubMenu>
                    )
                }
            })
//reduce的方法 + 递归
            /* menuListData.reduce((pre,item) =>{
                // 如果没有children
                if(!item.children){
                    pre.push((
                        <Menu.Item key={item.key} icon={item.icon}>
                            <Link to={item.key}>{item.title}</Link>
                        </Menu.Item>
                    ))
                }else{
                    pre.push((
                        <SubMenu key={item.key} title={item.title} icon={item.icon}>
                            {this.getMenuList(item.children)}
                        </SubMenu>
                    ))
                }
                return pre
            },[]) */
        )
    }
    render() {
        this.menuNodes = this.getMenuList(menuList)
        const path = this.props.location.pathname
        const {openKey} = this
        return (
            <div>
                <div className="logo">React后台管理系统</div>
                <Menu theme="dark" 
                selectedKeys={[path]} //当前选中的模块
                defaultOpenKeys={[openKey]} //要展开的模块
                mode="inline">
                {
                    this.menuNodes
                }
                </Menu>
            </div>
        )
    }
}
/* 
withRouter 高阶函数
包装非路由组件，返回一个新的组件
新的组件向非路由组件传递3个属性：history/Location/match
*/
export default withRouter(LeftNav)
