
import Ajax from '../services/Ajax'

class ButtonEventService{
constructor(){
    this.ajax = new Ajax();
}

    handleSaveContact(){
       
        console.log("handling saving contact");

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var address = document.getElementById('address').value;
        var number = document.getElementById('number').value;
        
        var data = {
            name : name,
            email : email,
            address : address,
            number : number
        }
    return new Promise((resolve,reject)=>{
        this.ajax.makeRequest("POST", "api/v1/user/add", data).then((resp) =>{
            resolve(resp);
           });
    })
       

    }

    
}

export default ButtonEventService;