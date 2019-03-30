import {UPDATE_CONTACT, FETCH_CONTACTS, CONTACT_DELETE_MSG_VIEW,action} from '../actions/Actions.js';
import { isNull } from 'util';

let contact =  {'firstName':"Amand"};
let contacts = []
let isContactDeleteMsgView = false
const initialState ={
  contact,
  contacts,
  isContactDeleteMsgView
};

function updateContact(payload){
  console.log(payload);
  contact = payload;
  return contact;
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
    default:
      return state;
  }
}
