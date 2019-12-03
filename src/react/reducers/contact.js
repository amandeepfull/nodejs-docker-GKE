import { FETCH_CONTACTS, GET_CONTACT,CONTACT_DELETE_MSG_VIEW,UPDATE_CONTACT_VIEW, CONTACT_CARD_VIEW, UPaction} from '../actions/types';
import { isNull } from 'util';

let contact =  {};
let contacts = [];
let isContactDeleteMsgView = false;
let isUpdateContactView = false;
let isContactCardView = false;
const initialState ={
  contact,
  contacts,
  isUpdateContactView,
  isContactDeleteMsgView,
  isContactCardView
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

function contactCardView(payload){
  isContactCardView = payload;
  return isContactCardView;
}

function getContact(payload){
  contact = payload;
  return contact;
}
export default function ContactReducer(state=initialState,action){

  switch (action.type) {
    case GET_CONTACT:
    
      return{
        ...state,
        contact : getContact(action.payload)
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
      case CONTACT_CARD_VIEW:
      return{
        ...state,
        isContactCardView : contactCardView(action.payload)
      }
    default:
      return state;
  }
}
