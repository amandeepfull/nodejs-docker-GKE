
if (!global.base_dir) {
    global.base_dir = __dirname
    global.abs_path = function(path) {
      return global.base_dir + path
    }
    /* eslint-disable global-require */
    global.include = function(file) {
      return require(global.abs_path(`/${file}`))
    }
    /* eslint-enable global-require */
  }
  const express = require('express')
  const bodyParser = require('body-parser');
  const path = require("path")
  // var rtmQueue = include('src/services/rtm/rtmqueue')
  
  function newApp() {
    const app = express()
    
    app.use(bodyParser.json())
   
    // /api/*" will go into this
    app.use('/api', require('./src/routes/api'))
    
    // html pages
    app.use('/', require('./src/routes/html_pages'))
    
    // Basic 404 handler
    app.use((req, res) => {
      res.status(404).send('Not Found')
    })
    console.log("direct : "+__dirname);

    app.use(express.static(__dirname + '/client/public')); //Serves resources from public folder
    
    // Basic error handler
    app.use((err, req, res) => {
      log.error('err handler log : %', err)
      // If our routes specified a specific response, then send that. Otherwise,
      // send a generic message so as not to leak anything.
      res.status(500).send(err.response || 'Something broke!')
    })
  
    return app
  }
  
  // kept in class so it can be called directly or indirectly
  class AppServer {
    constructor() {
      this.app = newApp()
      this.stop = this.stop.bind(this)
    }
  
    start() {
      this.server = this.app.listen( 3000, () => {
        const port = this.server.address().port
        console.log(`app listening on port ${port}`)
        process.on('SIGINT', this.stop)
        process.on('SIGTERM', this.stop)
  
    process.on('unhandledRejection', (reason, p) => {
          console.log(`unhandled rejection at ${p}, reason : ${reason}`)
        })
      })
    }
  
    stop() {
      this.server.close(() => {
        // rtmQueue.shutdown(()=> {
        //     log.info('shutting down server');
        process.exit(0)
        //  })
      })
    }
  }
  
  // start the server if file called using node server.js
  if (module === require.main) {
    new AppServer().start()
  }
  
  module.exports = AppServer
  