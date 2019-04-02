import React from 'react';
import ContactService from '../services/contactService';
import ContactActionCreater from '../actions/contact';

class ContactUpdate extends React.Component{

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.getContactInfoForUpdate = this.getContactInfoForUpdate.bind(this);
        this.contactService = new ContactService();
        this.actionCreater = new ContactActionCreater();
    
    }

    handleClick(){
            let contactInfo = this.getContactInfoForUpdate();
            let  userId = document.getElementById('contact-update-view').getAttribute('data-userid');
            this.contactService.updateContact(contactInfo, userId).then((resp) =>{

                let action = this.actionCreater.updateContactView(false);
                this.props.dispatch(action);
               
                action = this.actionCreater.getContact(resp.user);
                this.props.dispatch(action);
    
                 action = this.actionCreater.contactCardView(true);
                this.props.dispatch(action);
                
                let contacts = this.props.contactReducer.contacts;
                contacts = this.getUpdatedContacts(contacts, resp.user);
                action = this.actionCreater.fetchContacts(contacts);
                this.props.dispatch(action);
            });
  
    }

    getUpdatedContacts(contacts, updatedContact){
       let updatedContactList = [];

       for (var i = 0, len = contacts.length; i < len; i++) {
        
        if(contacts[i].id === updatedContact.id)
        continue;
        
        updatedContactList.push(contacts[i]);
        }
          
        updatedContactList.push(updatedContact);
        return updatedContactList;
    }
    getContactInfoForUpdate(){
        let name = document.getElementById('user-name').value;
        let address = document.getElementById('user-address').value;
        let number = document.getElementById('user-number').value;
        let email = document.getElementById('user-email').value;
        
        let contact ={
            name : name,
            address : address,
            number : number,
            email : email,
        }

        return contact;
    }
    render(){

        let name = document.getElementById('user-name').textContent;
        let address = document.getElementById('user-address').textContent;
        let number = document.getElementById('user-number').textContent;
        let email = document.getElementById('user-email').textContent;

    return (
        <div id='contact-update-view' className='contactView' data-userid={this.props.userId}>
        <h2> Update Contact </h2>
        Name  <input type='text' placeholder={name} size='40' id="user-name"/><br/><br/>
        Address  <input type='text' value={address} size='40' id="user-address"/><br/><br/>
        Number  <input type='text' value={number} size='40' id="user-number"/><br/><br/>
        Email  <input type='text' value={email} size='40' id="user-email"/><br/><br/>
        <button id='button-update-contact' onClick={this.handleClick}>Save</button>
        </div>
    )
    }
}

export default ContactUpdate;
