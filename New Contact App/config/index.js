'use strict';

const nconf = module.exports = require('nconf');
const mode = setAppMode()

nconf.file('./config/' + mode + '.json')

function setAppMode() {
    var mode = 'development'
    return mode
}

