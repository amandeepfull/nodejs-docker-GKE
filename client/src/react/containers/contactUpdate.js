import {connect} from 'react-redux';
import ContactUpdate from '../components/contactUpdate';

const mapStateToProps =  (state) =>({
    contactReducer : state.ContactReducer
})
const ContactUpdateContainer = connect(
mapStateToProps,
)(ContactUpdate)


export default ContactUpdateContainer;