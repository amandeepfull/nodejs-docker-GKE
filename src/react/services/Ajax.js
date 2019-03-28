

class Ajax {
constructor(){
    this.url = "http://localhost:3038/"
}
makeRequest(method, apiPath, data){
    return new Promise((resolve, reject) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var resp =   JSON.parse(this.responseText);
            resolve(resp); 
          }
        };
      
      
        xhttp.open(method, this.url+apiPath, true);
      
        if(data){
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(data));
      }else{
      xhttp.send();
      }

    })
}
}

export default Ajax;