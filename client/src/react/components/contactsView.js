import React from 'react'
import Header from './header'
import Title from './title'
import Ajax from '../services/Ajax'
import Contact from '../containers/contact'
import contactActionCreater from '../actions/contact'
import ContactService from '../services/contactService'
class ContactsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contact :{}
        }
        this.getContact = this.getContact.bind(this);
        this.goBack = this.goBack.bind(this);
        this.ajax = new Ajax();
        this.contactActionCreater = new contactActionCreater();
        this.contactService = new ContactService();
    }

    componentDidMount() {

        fetch("api/api/v1/user/contacts")
            .then(response => response.json())
            .then(data => {
                let action = this.contactActionCreater.fetchContacts(data.users);
                this.props.dispatch(action);
            });
    }

    getContact(event) {

        let action = this.contactActionCreater.contactDeleteMsgView(false);
        this.props.dispatch(action);
        action = this.contactActionCreater.updateContactView(false);
        this.props.dispatch(action);

        this.contactService.getContact(event.target.id).then((resp =>{
    
            action = this.contactActionCreater.getContact(resp.user);
            this.props.dispatch(action);
            action = this.contactActionCreater.contactCardView(true);
            this.props.dispatch(action);
        }));
           
    
    }

    goBack() { window.location.href = '/'; }

    render() {
        
        if (!this.props.contactReducer.contacts.length)
            return (<div id="contactsView" className='contactsView' >
                <Header id="getContactHeader" content="Your Contact App Contacts" />
                <button onClick={this.goBack}>Back</button><br /><br /><br />
                <Title value="contacts not found" /></div>
            )
            
        return (
            <React.Fragment>
            <div id="contactsView" className='contactsView'>
                <div id="contactsViewList" className='contactListView'>
                    <Header id="getContactHeader" content="Your Contact App Contacts" />
                    <button onClick={this.goBack}>Back</button><br /><br /><br />
                    {this.props.contactReducer.contacts.map(contact => {
                        return (
             <React.Fragment>  <button id={contact.id} onClick={this.getContact} >{contact.name}</button><br /><br /></React.Fragment>
                        )
                    })}
                </div>
                </div>
               
               <Contact display={this.props.contactReducer.isContactCardView} userId={this.props.contactReducer.contact.id} name={this.props.contactReducer.contact.name} address={this.props.contactReducer.contact.address} number={this.props.contactReducer.contact.number} email={this.props.contactReducer.contact.email} />
            </React.Fragment>
        )

    }
}



export default ContactsView;
