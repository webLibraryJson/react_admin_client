import React, { Component } from 'react'

export default class App extends Component {
  state = {
    welcom:"hello React"
  }
  change = (welcom) =>{
    this.setState({welcom})
  }
  changeTow = (params) =>{
    return () => {
      this.setState({welcom:params})
    }
  }
  render() {
    return (
      <div>
        {this.state.welcom}
        <button onClick={() =>{this.change("你好 react")}}>更换titleOne</button>
        <button onClick={this.changeTow('hello react')}>更换titleTow</button>
      </div>
      
    )
  }
}

