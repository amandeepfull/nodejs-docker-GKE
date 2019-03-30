

export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const CONTACT_DELETE_MSG_VIEW = 'CONTACT_DELETE_MSG_VIEW';
//common method to construct payload
export const action =(type,payload)=>{
  return {
    type,
    payload
  }
}
