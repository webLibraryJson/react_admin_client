import React, { Component } from 'react'
// import {Button,message,Input} from 'antd'
import {Switch,Route,Redirect} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import './App.less'

export default class App extends Component {
  render() {
    return (
      <div className='appbox'>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Redirect to="/login"></Redirect>
        </Switch>
      </div>
      
    )
  }
}

