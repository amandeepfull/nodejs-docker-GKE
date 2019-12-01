const redis = require('redis');
const bluebird = require("bluebird");
const { redisKeys }  = require('../../../config');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

class RedisService {

    constructor() {
        this.client = this.newClient(redisKeys);
    }

    quit() {
        this.client.quit();
    }

    newClient(options) {

        let client = redis.createClient(options.port, options.host, { 'password': options.key });

        client.on('error', (err) => console.log('REDIS:', err));
        client.on('warning', (warn) => console.log('REDIS:', warn));

        client.on('connect', (warn) => console.log('Connected to Redis'));
        client.on('ready', (warn) => console.log(`Redis connection ready, server: ${options.host}:${options.port}`));

        return client
    }


    exists(key, cb) {
        return this.client.exists(key, (err, reply) => {
            cb(err, reply === 1)
        })
    }
}

module.exports = new RedisService()
