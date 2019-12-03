
  module.exports = {
    "redisKeys": {
        "host": process.env.REDIS_HOST,
        "port": process.env.REDIS_PORT,
        "errorHandlerOptions": {
            "dumpExceptions": true,
            "showStack": true
        }
    }
}

