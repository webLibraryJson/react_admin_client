import React, { Component } from 'react'
// import {Button,message,Input} from 'antd'
import {Switch,Route,Redirect} from 'react-router-dom'
import Admin from './pages/admin'
import Login from './pages/login'
import './App.less'

export default class App extends Component {
  render() {
    return (
      <div className='appbox'>
        <Switch>
          <Route path="/" component={Admin}></Route>
          <Route path="/login" component={Login}></Route>
          <Redirect to="/login"></Redirect>
        </Switch>
      </div>
      
    )
  }
}

