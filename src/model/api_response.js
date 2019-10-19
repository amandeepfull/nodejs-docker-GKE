
const Error = include("src/model/error");

class ApiResponse {
    constructor(data, ok, error){
        
        this.data = {};
        this.ok = ok;
        this.error = {};
    }

    addData(key, data){
        if(key == undefined || data == undefined || !key || !data){
        console.log("key or data is not avaialable to add");
        return;
        }
        this.data[key] = data;
    }

}

module.exports = new ApiResponse();