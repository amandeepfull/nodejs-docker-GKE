
import React, { Component } from 'react'

export default class Message extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
      <div id="msg-view" className="msgView">
        <h2> {this.props.msg} </h2>
      </div>
    )
  }
}
