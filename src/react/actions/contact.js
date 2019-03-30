

import {UPDATE_CONTACT, FETCH_CONTACTS, CONTACT_DELETE_MSG_VIEW} from './types'

export class ContactActionCreater{

  updateContact = (payload) => {
    return { type: UPDATE_CONTACT, payload : payload };
  }

fetchContacts = (payload) =>{
    return {type: FETCH_CONTACTS, payload : payload};
  }

  contactDeleteMsgView = (payload) => {
    return {type : CONTACT_DELETE_MSG_VIEW, payload : payload};
  }
}

export default ContactActionCreater;
