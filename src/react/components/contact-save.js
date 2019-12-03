import React from 'react';
import Header from './header';
import Title from './title';
import ContactsView from '../containers/contactsView';
import { ContactActionCreater } from '../actions/contact';
import ContactService from '../services/contactService';
class ContactSave extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            titleValue : "Hi Buddy, Save your contact",
            view : 'save-contact-view', 
        }

       this.handleClick = this.handleClick.bind(this);
       this.contactService = new ContactService();

    }

    handleClick (e){

        switch(e.target.id){
            case 'button-save-contact':
            let contactInfo = this.getContactInfoForSave();
            this.contactService.saveContact(contactInfo).then(resp=>{
            
                this.setState({titleValue: "Successfully updated!!!"})

                let action = new ContactActionCreater().updateContactView(resp);
                this.props.dispatch(action);
            })
            break;

            case 'button-get-contacts':
            this.setState({
            view : 'contacts-list-view'
        })
        }
        

    }

    getContactInfoForSave(){
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let address = document.getElementById('address').value;
        let number = document.getElementById('number').value;
        
        let contact = {
            name : name,
            email : email,
            address : address,
            number : number
        }

        return contact;
    }

    render(){

        if(this.state.view === 'save-contact-view'){
        return (
        <div id="save_contact_panel" onClick={this.handleClick}>
         
         <Header id="saveContactHeader" content = "Contact App"/>
         <Title id='saveContactRespMsg' value={this.state.titleValue}/>
            Name <input type="text" id="name"/><br/>
            Email <input type="text" id="email"/><br/>
            Address <input type="text" id="address"/><br/>
            Contact Number <input type="text" id="number"/><br/><br/>
                <button id="button-save-contact" >Add contact</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button id="button-get-contacts">Get Contacts</button>
                
        </div>)

    }else if(this.state.view === 'contacts-list-view'){
       return <ContactsView/>
    }
}
}

  
export default ContactSave;
