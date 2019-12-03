
import Ajax from '../services/Ajax'

class ContactService{
constructor(){
    this.ajax = new Ajax();
}

    saveContact(contactInfo){
           
    return new Promise((resolve,reject)=>{
        this.ajax.makeRequest("POST", "api/v1/user/add", contactInfo).then((resp) =>{
            resolve(resp);
           });
    })
       

    }

    deleteContact(userId){
        return new Promise((resolve, reject) =>{
            this.ajax.makeRequest("DELETE", "api/v1/user/contact/"+userId, null).then((resp) =>{
                resolve(resp);
            });
        })
    }

    
    updateContact(contact, userId){
        return new Promise((resolve, reject) =>{
            this.ajax.makeRequest("PUT", "api/v1/user/contact/"+userId, contact).then((resp) =>{
                resolve(resp);
            });
        })
    }

    getContact(userId){
        return new Promise((resolve, reject) =>{
            this.ajax.makeRequest("GET", "api/v1/user/contact/"+userId).then((resp) =>{
                resolve(resp);
            });
        })
    }
}

export default ContactService;