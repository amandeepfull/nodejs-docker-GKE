import React from 'react'
import Button from '../components/button'
import Ajax from '../services/Ajax'
import ContactsView from '../components/contactsView'
import { ActionCreator } from '../actionCreater/ActionCreator';
import store from '../store/commonStore';
import {connect} from 'react-redux';
class Contact extends React.Component{
     
    constructor(props){
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
        this.getViewClass = this.getViewClass.bind(this);
        this.ajax = new Ajax();
        this.actionCreater = new ActionCreator();
    }

    handleClick(event){

        switch (event.target.id){
            case 'button-delete-contact':
            let userId = document.getElementById('button-delete-contact').getAttribute("data-userId");
            this.ajax.makeRequest("DELETE", "api/v1/user/contact/"+userId, null).then(resp=>{
            let action = this.actionCreater.fetchContacts(resp.users);
            this.props.dispatch(action);

            action = this.actionCreater.contactDeleteMsgView(true);
            this.props.dispatch(action);     
        });
            case 'button-update-contact':

            break;
        }
    }

    handleUpdateContact(event){



    }

    getViewClass(view){

        let className;
        if(view ===  'contact-list-view')
        className = 'contactViewHide';
        else if(view === 'contact-card-view')
        className = 'contactViewShow';
        return className;
    }

   render(){
    
    const className = this.getViewClass(this.props.display);
    
    if(this.props.contactReducer.isContactDeleteMsgView){ 
           return <div id="contact-card-view" className={className}><h2 className="contactUpdAndDelMsg"> Contact deleted successfully</h2> </div>
   }
  

    // if(this.props.contactUpdated)

    // return <h2 className="contactUpdAndDelMsg"> Contact updated successfully</h2>
    console.log( "userID : "+this.props.userId);
    return (
        <div id="contact-card-view" className={className} onClick={this.handleClick}>

            
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


const mapStateToProps = (state) => ({
    contactReducer : state.ContactReducer
  })
  
export default connect(mapStateToProps, null)(Contact);
