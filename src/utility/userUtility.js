class UserUtility{

    generateUserModel(userId, user){
        let json = {
            'id': userId,
            'name' : user.name,
            'email' : user.email,
            'address': user.address,
            'number' : user.number
        }
        return json;
    }
    
}

module.exports = new UserUtility()