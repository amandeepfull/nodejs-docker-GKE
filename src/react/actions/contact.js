

import {UPDATE_CONTACT_VIEW, FETCH_CONTACTS, CONTACT_DELETE_MSG_VIEW} from './types'

export class ContactActionCreater{

  updateContactView = (payload) => {
    return { type: UPDATE_CONTACT_VIEW, payload : payload };
  }

fetchContacts = (payload) =>{
    return {type: FETCH_CONTACTS, payload : payload};
  }

  contactDeleteMsgView = (payload) => {
    return {type : CONTACT_DELETE_MSG_VIEW, payload : payload};
  }

}

export default ContactActionCreater;
