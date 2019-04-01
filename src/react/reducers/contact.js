import {UPDATE_CONTACT, FETCH_CONTACTS, CONTACT_DELETE_MSG_VIEW,UPDATE_CONTACT_VIEW,action} from '../actions/types';
import { isNull } from 'util';

let contact =  {};
let contacts = [];
let isContactDeleteMsgView = false;
let isUpdateContactView = false;
const initialState ={
  contact,
  contacts,
  isContactDeleteMsgView
};

function updateContactView(payload){
  isUpdateContactView = payload;
  return isUpdateContactView;
}

function fetchContacts(payload){
  console.log("contacts fetched: "+JSON.stringify(payload));
  contacts = payload;
  return contacts;
}

function contactDeleteMsgView(payload){
  isContactDeleteMsgView = payload;
return isContactDeleteMsgView;
}
export default function ContactReducer(state=initialState,action){

  switch (action.type) {
    case UPDATE_CONTACT:
    
      return{
        ...state,
        contact : updateContact(action.payload)
      }

      case FETCH_CONTACTS:
      return{
      ...state,
      contacts : fetchContacts(action.payload)
      }

      case CONTACT_DELETE_MSG_VIEW:
      return{
        ...state,
        isContactDeleteMsgView : contactDeleteMsgView(action.payload) 
      }
      case UPDATE_CONTACT_VIEW:
      return{
        ...state,
        isUpdateContactView : updateContactView(action.payload)
      }
    default:
      return state;
  }
}
