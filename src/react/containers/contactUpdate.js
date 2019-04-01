import {connect} from 'react-redux';
import ContactUpdate from '../components/contactUpdate';

const mapStateToProps =  (state) =>({
    contactReducer : state.ContactReducer
})
const ContactsViewContainer = connect(
mapStateToProps,
)(ContactUpdate)



export default ContactUpdate;