var router = require('express').Router({mergeParams: true})
var userService = include('src/services/user')

router.get('/contacts', (req, res) => {
    userService.getUserContacts('amandeepContactAppId').then((usersResp)=>{
        res.json(usersResp)
})
    
})

router.get('/contact/:contactId', (req, res)=>{

    console.log("req : "+req.params);
    userService.getContactById(req.params.contactId).then((contact)=>{
        res.json(contact);
    })

})

router.post('/add', (req, res) =>{
    userService.createContact(req.body,(user, err)=>{
            res.json(user)
    })
})

router.delete('/contact/:contactId',(req, res)=>{

    userService.removeUserContact('amandeepContactAppId',req.params.contactId).then((remainUsers)=>{
        res.json(remainUsers)
    })
})

router.put('/contact/:contactId', (req, res) =>{
userService.updateUserContact(req.params.contactId, req.body,(user, err)=>{
    res.json(user)
})
    
})


module.exports = router