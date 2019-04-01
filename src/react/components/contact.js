import React from 'react'
import Button from '../components/button'
import Ajax from '../services/Ajax'
import { ContactActionCreater } from '../actions/contact';
import ContactService from '../services/contactService';
import Message from './message';
import ContactUpdate from '../containers/contactUpdate';

const style = {
    hideContactCard : {
        display : 'none'     
    },

    showContactCard:{
        display: 'block',
    },

    pTag :{
        display : 'inline'
    }
}

class Contact extends React.Component{
     
    constructor(props){
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
        this.ajax = new Ajax();
        this.contactActionCreater = new ContactActionCreater();
        this.contactService = new ContactService();
    }

    

    handleClick(event){

        switch (event.target.id){
            case 'button-delete-contact':
            let userId = document.getElementById('button-delete-contact').getAttribute("data-userId");
            this.contactService.deleteContact(userId).then(resp=>{
            let action = this.contactActionCreater.fetchContacts(resp.users);
            this.props.dispatch(action);

            action = this.contactActionCreater.contactDeleteMsgView(true);
            this.props.dispatch(action);     
        });
            case 'button-update-contact':
            
            let action = this.contactActionCreater.updateContactView(true);
            this.props.dispatch(action);

            break;
        }
    }


   render(){
    
    let contactCardStyles = this.props.display ? style.showContactCard : style.hideContactCard ;
  
    if(this.props.contactReducer.isContactDeleteMsgView)
           return <Message msg="contact deleted successfully"/>
   
  
   if(this.props.contactReducer.isUpdateContactView)
            return <ContactUpdate/>
   
    return (
        <div id="contact-card-view" style={contactCardStyles} className='contactView' onClick={this.handleClick}>    
            <h1 id="user-name" >{this.props.name}</h1><br/>
            
             Address : <p style={style.pTag} id="user-address">{this.props.address}</p><br/>
             Number : <p style={style.pTag} id="user-number">{this.props.number}</p><br/>
             Email : <p style={style.pTag} id="user-email">{this.props.email}</p><br/><br/>
            <Button name="Update" id='button-update-contact' userId={this.props.userId}/>&nbsp;&nbsp;&nbsp;
            <Button name="Delete" id='button-delete-contact' userId={this.props.userId}/>

    </div>
       
    )
}
}


  
export default Contact;
