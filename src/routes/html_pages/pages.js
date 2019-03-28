var router = require('express').Router({mergeParams: true})
const path = require('path')

// js files 
router.get('/client.min.js',(req,resp)=>{
  resp.sendFile(path.join(__dirname + '/../../react/client.min.js'))
})

//css files
router.get('/css/style.css',(req,resp)=>{
  resp.sendFile(path.join(__dirname + '/../../react/css/style.css'))
})

//welcome page
router.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname + '/../../react/index.html'))  
})

module.exports = router