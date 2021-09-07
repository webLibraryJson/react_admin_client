import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        console.log(this.props.location.state.username,'props是多少呢');
        return (
            <div>
                home页面
            </div>
        )
    }
}
