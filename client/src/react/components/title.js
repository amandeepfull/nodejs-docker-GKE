import React from 'react'


class Title extends React.Component{
    render(){
            return <h5 id={this.props.id}>{this.props.value}</h5>
    }
}


export default Title;
