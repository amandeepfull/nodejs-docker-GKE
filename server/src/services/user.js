const redisService = require('../../src/services/redis/redis_client');
const redisKeysService = require('../../src/services/redis/redis_keys')
const uuid = require('uuid/v1')
const objUtil = require('../../src/utility/objUtility')
const userUtil = require('../../src/utility/userUtility')

class ContactService{

constructor(){
this.myContactKey =  redisKeysService.getUserDirectoryKey('amandeepContactAppId')
}

createContact(user, cb){
return new Promise((resolve, reject) => {
const multi =  redisService.client.multi()
var userUuid = uuid(),
key = redisKeysService.getUserKey(userUuid);

multi.set(key,JSON.stringify(userUtil.generateUserModel(userUuid,user)))

multi.zadd(this.myContactKey,new Date().getTime(), userUuid )
multi.exec((err, replies) => {

if (err) {
return cb({ok :false})
} else {

let userInfo = {

"id" : userUuid,
'name' : user.name,
'email' : user.email,
'address': user.address,
'number' : user.number
},
jsonResp = {
userInfo,
'ok':true
}
cb(jsonResp)
}
})

})
}

getUserContacts(userId,cb){

return new Promise((resolve, reject) => {
var usersInfo = [];
var contactIds 
redisService.client.zrange(this.myContactKey, 0 , -1, function(err , contactIds){

if(err)
reject(err)

if(objUtil.isEmpty(contactIds))
resolve({'users':[],'ok' : true})

redisService.client.mgetAsync(redisKeysService.getUsersKeys(contactIds)).then((contacts, err) =>{

var arrUser = [];

contacts.forEach(contact => {
arrUser.push(JSON.parse(contact))
});

resolve({'users':arrUser,'ok' : true})

}).catch(reject)


})

})
}

getContactById(userId){
return new Promise((resolve, reject) =>{
    redisService.client.get(redisKeysService.getUserKey(userId), (err, contact) =>{        
        
        if(err)
        reject(err)

        resolve({'user':JSON.parse(contact),'ok' : true})
        
        })
})

}

removeUserContact(userId, deleteUserId){
    return new Promise((resolve, reject) =>{

     const multi =   redisService.client.multi();
     multi.zrem(redisKeysService.getUserDirectoryKey(userId),deleteUserId);
     multi.exec((err, replies) =>{
        if(err)
        reject(err)
     })

     this.getUserContacts(userId).then((usersresp)=>{
        resolve(usersresp);
     })
})
}

updateUserContact(contactId, userInfo,cb){

    return new Promise((resolve, reject) => {

        const multi = redisService.client.multi();
        const key = redisKeysService.getUserKey(contactId);

multi.set(key,JSON.stringify(userUtil.generateUserModel(contactId,userInfo)))
multi.exec((err, replies) => {

if (err) {
return cb({ok :false})
} else {

let user = {

"id" : contactId,
'name' : userInfo.name,
'email' : userInfo.email,
'address': userInfo.address,
'number' : userInfo.number
},
jsonResp = {
user,
'ok':true
}
cb(jsonResp)
}
})

})
}

}

module.exports = new ContactService()