import React from 'react'
import Button from '../components/button'
import Ajax from '../services/Ajax'
import ContactsView from '../components/contactsView'

class Contact extends React.Component{
     
    constructor(props){
        super(props);
        this.state = {
            contactDeleted : false,
            contactUpdated : false
        }
        this.handleUpdateContact = this.handleUpdateContact.bind(this);
        this.handleDeleteContact = this.handleDeleteContact.bind(this);
        this.ajax = new Ajax();
    }

    handleDeleteContact(event){
        this.ajax.makeRequest("DELETE", "api/v1/user/contact/"+event.target.id, null).then(resp=>{
            this.setState({
                contactDeleted : true
            })


        })
    }

    handleUpdateContact(event){

    }

   render(){
    const className = this.props.display == 'none' ? "contactViewHide": "contactViewShow";
    console.log("className : "+className);
        console.log("this.state.contactDeleted : "+this.state.contactDeleted);
    if(this.state.contactDeleted){
        debugger
       document.getElementById('contactView').remove();
    
    return <React.Fragment><h2 className="contactUpdAndDelMsg"> Contact deleted successfully</h2>
        
    </React.Fragment>
   }

    if(this.state.contactUpdated)
    return <h2 className="contactUpdAndDelMsg"> Contact updated successfully</h2>

    return (
        <div id="contactView" className={className}>
        
            <h1> Contact </h1>
             Name : {this.props.name}<br/>
             Address : {this.props.address}<br/>
             Number : {this.props.number}<br/>
             Email : {this.props.email}<br/><br/>
            <Button name="Update" id={this.props.id} clickButton = {this.handleUpdateContact}/>&nbsp;&nbsp;&nbsp;
            <Button name="Delete" id={this.props.id} clickButton = {this.handleDeleteContact}/>

         </div>
       
    )
}
}


export default Contact;
