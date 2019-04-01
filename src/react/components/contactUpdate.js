import React from 'react'
import Button from './button'

class ContactUpdate extends React.Component{

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(){

    }

    render(){

        let name = document.getElementById('user-name').textContent;
        let address = document.getElementById('user-address').textContent;
        let number = document.getElementById('user-number').textContent;
        let email = document.getElementById('user-email').textContent;

    return (
        <div id='contact-update-view' className='contactView'>
        <h2> Update Contact </h2>
        Name  <input type='text' value={name} size='40'/><br/><br/>
        Address  <input type='text' value={address} size='40'/><br/><br/>
        Number  <input type='text' value={number} size='40'/><br/><br/>
        Email  <input type='text' value={email} size='40' /><br/><br/>
        <Button id='button-update-contact' clickButton={this.handleClick} name='Save'/>
        </div>
    )
    }
}

export default ContactUpdate;
