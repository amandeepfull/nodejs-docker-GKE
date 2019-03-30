import React from 'react'
import Button from './button'
import Header from './header'
import Title from './title'
import AppConfig from "../AppConfig"
import Ajax from '../services/Ajax'
import Contact from '../containers/contact'
import contactActionCreater from '../actions/contact'

class ContactsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            view: "contact-list-view",
            contact :{}
        }
        this.getContact = this.getContact.bind(this);
        this.goBack = this.goBack.bind(this);
        this.ajax = new Ajax();
        this.contactActionCreater = new contactActionCreater();
    }

    componentDidMount() {

        fetch(AppConfig.getServerUrl() + "api/v1/user/contacts")
            .then(response => response.json())
            .then(data => {
                let action = this.contactActionCreater.fetchContacts(data.users);
                this.props.dispatch(action);
            });
    }

    getContact(event) {

        let action = this.contactActionCreater.contactDeleteMsgView(false);
        this.props.dispatch(action);
        this.ajax.makeRequest("GET", "api/v1/user/contact/" + event.target.id).then((resp => {
            this.setState({
                contact: resp.user,
                view: 'contact-card-view',
            })
        }))
    }

    goBack() { window.location.href = '/'; }

    render() {
        
        if (!this.props.contactReducer.contacts.length)
            return (<div id="contactsView" className='contactsView' >
                <Header id="getContactHeader" content="Your Contact App Contacts" />
                <Button clickButton={this.goBack} name="Back" /><br /><br /><br />
                <Title value="contacts not found" /></div>
            )
            
        return (
            <React.Fragment>
            <div id="contactsView" className='contactsView'>
                <div id="contactsViewList" className='contactListView'>
                    <Header id="getContactHeader" content="Your Contact App Contacts" />
                    <Button clickButton={this.goBack} name="Back" /><br /><br /><br />
                    {this.props.contactReducer.contacts.map(contact => {
                        return (
             <React.Fragment>  <Button name={contact.name} id={contact.id} clickButton={this.getContact} /><br /><br /></React.Fragment>
                        )
                    })}
                </div>
                </div>
               
               <Contact display={this.state.view} userId={this.state.contact.id} name={this.state.contact.name} address={this.state.contact.address} number={this.state.contact.number} email={this.state.contact.email} />
            </React.Fragment>
        )

    }
}



export default ContactsView;
