var router = require('express').Router({mergeParams: true})
const path = require('path')

// js files 
router.get('/client.min.js',(req,resp)=>{
  resp.sendFile(path.join(__dirname + '/../../react/client.min.js'))
})

//welcome page
router.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname + '/../../html/index.html'))  
})

module.exports = router