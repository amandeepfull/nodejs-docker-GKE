

import {UPDATE_CONTACT_VIEW, FETCH_CONTACTS,GET_CONTACT, CONTACT_DELETE_MSG_VIEW, CONTACT_CARD_VIEW} from './types'

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

  contactCardView  = (payload) => {
    return {type : CONTACT_CARD_VIEW, payload : payload};
  }

  getContact  = (payload) => {
    return {type : GET_CONTACT, payload : payload};
  }


}

export default ContactActionCreater;
