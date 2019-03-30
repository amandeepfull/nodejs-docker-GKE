import {connect} from 'react-redux';
import ContactSave from '../components/contact-save';

const mapStateToProps =  (state) =>({
    contactReducer : state.ContactReducer
  })
const ContactSaveContainer = connect(
mapStateToProps,
)(ContactSave)

export default ContactSaveContainer;