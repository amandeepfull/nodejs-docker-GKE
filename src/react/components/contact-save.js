import React from 'react'
import Button from './button'
import Header from './header'
import Title from './title'
import ButtonEventService from '../services/buttonEventService'
import ContactsView from '../components/contactsView'

class ContactSave extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            titleValue : "save your contact",
            displayContactSaveView : true,
            displayContactsView : false
            
        }
       //this.updateViewSaveContact = this.updateViewSaveContact.bind(this);
       this.handleClick = this.handleClick.bind(this);
       this.getContacts = this.getContacts.bind(this);
    }
    componentDidMount(){
        //server call and update the state


    }
    
    handleClick (e){
        console.log("event triggered", e.target.id);
        const buttonEventService = new ButtonEventService();
        var response;
        switch(e.target.id){
            case 'saveContact':
            buttonEventService.handleSaveContact().then(resp=>{
                if(!resp){
                    console.log("error");
                }
                this.setState({titleValue: "Successfully updated!!!"})
            })
            break;
        }
        

    }

    getContacts(){
        this.setState({
            displayContactsView : true,
            displayContactSaveView :false
        })
        
    }
    render(){

        if(this.state.displayContactSaveView){
        return (
        <div id="save_contact_panel">
         <Header id="saveContactHeader" content = "Contact App"/>
         <Title id='saveContactRespMsg' value={this.state.titleValue}/>
   Name <input type="text" id="name"/><br/>
   Email <input type="text" id="email"/><br/>
   Address <input type="text" id="address"/><br/>
   Contact Number <input type="text" id="number"/><br/><br/>
    <Button id="saveContact" clickButton={this.handleClick} name="Add contact"/>
    <Button id="getContacts" clickButton = {this.getContacts} name = "Get Contacts"/>
        </div>)

    }else{
       return <ContactsView/>
    }
}
}

export default ContactSave
