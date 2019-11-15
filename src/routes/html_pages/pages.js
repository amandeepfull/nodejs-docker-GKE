var router = require('express').Router({mergeParams: true})
const path = require('path')

// js files 
router.get('/js/index.js',(req,resp)=>{
  resp.sendFile(path.join(__dirname + '/../../index.js'))
})

//css files
router.get('/css/style.css',(req,resp)=>{
  resp.sendFile(path.join(__dirname + '/../../css/style.css'))
})

//welcome page
router.get('/', (req, res)=>{
  console.log("coming here...");
  res.sendFile(path.join(__dirname + 'client/public/index.html'))  
})

module.exports = router