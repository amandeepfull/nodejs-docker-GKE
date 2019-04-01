import React from 'react'
import Button from '../components/button'
import Ajax from '../services/Ajax'
import { ContactActionCreater } from '../actions/contact';
import ContactService from '../services/contactService';
import Message from './message';


const style = {
    hideContactCard : {
        display : 'none'     
    },

    showContactCard:{
        display: 'block',
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

            break;
        }
    }

    handleUpdateContact(event){



    }

   render(){
    
    let contactCardStyles = this.props.display ? style.showContactCard : style.hideContactCard ;
  
    if(this.props.contactReducer.isContactDeleteMsgView){
           return <Message msg="contact deleted successfully"/>
   }
  
    return (

        <div id="contact-card-view" style={contactCardStyles} className='contactView' onClick={this.handleClick}>    
            <h1> {this.props.name} </h1>
            
             Address : {this.props.address}<br/>
             Number : {this.props.number}<br/>
             Email : {this.props.email}<br/><br/>
            <Button name="Update" id='button-update-contact' userId={this.props.userId}/>&nbsp;&nbsp;&nbsp;
            <Button name="Delete" id='button-delete-contact' userId={this.props.userId}/>

         </div>
       
    )
}
}


  
export default Contact;
