import React from 'react'
import Button from './button'
import Header from './header'
import Title from './title'
import ButtonEventService from '../services/buttonEventService'
import AppConfig from "../AppConfig"
import Ajax from '../services/Ajax'
import Contact from './contact'

class ContactsView extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            contacts:[], 
            contact :{},
            displayContactView : 'none'
        }
        this.getContact = this.getContact.bind(this);
        this.goBack = this.goBack.bind(this);
        this.ajax = new Ajax();
        }
        
    componentDidMount(){
        console.log("component did mount method");
        //server call and update the state
        fetch(AppConfig.getServerUrl()+"api/v1/user/contacts")
        .then(response => response.json())
        .then(data => this.setState({ contacts:data.users }));


    }
    
    getContact(event){
            console.log("json event : "+JSON.stringify(event))
        this.ajax.makeRequest("GET","api/v1/user/contact/"+event.target.id).then((resp =>{
                this.setState({
                    contact : resp.user,
                    displayContactView : 'show'
                })
        }))
    }
   
    goBack(){

        window.location.href = '/';
    }
    render(){
        console.log("render method :")
        
        if(!this.state.contacts.length)
            return (<div id="contactsView">
            <Button clickButton= {this.goBack} name="Back"/><br/><br/><br/>
                <Header id="getContactHeader" content = "Your Contact App Contacts"/>
                <Title value="contacts not found"/></div>
            )
        return(
        
          <div id="contactsView">
          <div id="contactsViewList">
              <Header id="getContactHeader" content = "Your Contact App Contacts"/>
              <Button clickButton= {this.goBack} name="Back"/><br/><br/><br/>
        {this.state.contacts.map(contact=>{
            return(
            
              <React.Fragment>  <Button name = {contact.name} id={contact.id} clickButton = {this.getContact}/><br/><br/></React.Fragment>
            
                
        )})}
        </div>
    
        <Contact display={this.state.displayContactView} id={this.state.contact.id} name={this.state.contact.name} address={this.state.contact.address} number={this.state.contact.number} email={this.state.contact.email}/>
        </div>
    )
        
    }
}

export default ContactsView
