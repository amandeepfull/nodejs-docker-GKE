import {connect} from 'react-redux';
import ContactsView from '../components/contactsView';

const mapStateToProps =  (state) =>({
    contactReducer : state.ContactReducer
})
const ContactsViewContainer = connect(
mapStateToProps,
)(ContactsView)

export default ContactsViewContainer;