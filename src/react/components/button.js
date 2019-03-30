import React from 'react'

class Button extends React.Component{
    render(){
    return (
        <button id={this.props.id} data-userId={this.props.userId} onClick={() => this.props.clickButton(event)}>{this.props.name}</button>
    )
    }
}

export default Button;
