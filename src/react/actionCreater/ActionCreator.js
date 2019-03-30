
import {UPDATE_CONTACT, FETCH_CONTACTS, CONTACT_DELETE_MSG_VIEW} from '../actions/Actions'

export class ActionCreator{

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
