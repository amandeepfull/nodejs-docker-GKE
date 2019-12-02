
class RedisKeyService{

    constructor(){
        this.base = "myApp"
    }

    getUserKey(userId){
        return this.base+":user:"+userId
    }

    getUsersKeys(userIds){
        let keys = [];
        userIds.forEach(userId => {
            keys.push(this.base+":user:"+userId) 
        });
        return keys;
    }
    getUserDirectoryKey(userId){
        return this.base+":directory:"+userId
    }

    
}

module.exports = new RedisKeyService();