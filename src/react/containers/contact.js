import {connect} from 'react-redux';
import Contact from '../components/contact';

const mapStateToProps =  (state) =>({
    contactReducer : state.ContactReducer
})
const ContactContainer = connect(
mapStateToProps,
)(Contact)

export default ContactContainer;