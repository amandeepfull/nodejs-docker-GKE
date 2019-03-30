import React from 'react';
import Button from './button';
import Header from './header';
import Title from './title';
import ButtonEventService from '../services/buttonEventService';
import ContactsView from '../components/contactsView';
import {connect} from 'react-redux';
import { ActionCreator } from '../actionCreater/ActionCreator';

class ContactSave extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            titleValue : "save your contact",
            view : 'save-contact-view',   
        }

       this.handleClick = this.handleClick.bind(this);
      
    }

    handleClick (e){
        console.log("event triggered", e.target.id);
        const buttonEventService = new ButtonEventService();
        
        var response;
        switch(e.target.id){
            case 'button-save-contact':
            buttonEventService.handleSaveContact().then(resp=>{
                if(!resp){
                    console.log("error");
                }
                this.setState({titleValue: "Successfully updated!!!"})

                let action = new ActionCreator().updateContact(resp);
                this.props.dispatch(action);
            })
            break;
            case 'button-get-contacts':
            this.setState({
            view : 'contacts-list-view'
        })
        }
        

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
                <Button id="button-save-contact"  name="Add contact"/>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button id="button-get-contacts"  name = "Get Contacts"/>
                
        </div>)

    }else if(this.state.view === 'contacts-list-view'){
       return <ContactsView/>
    }
}
}

const mapStateToProps = (state) => ({
    contactReducer : state.ContactReducer
  })
  
export default connect(mapStateToProps, null)(ContactSave);
