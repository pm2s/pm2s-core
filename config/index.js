var nconf = require('nconf');

nconf.env().file('config/defaults.json');

module.exports = nconf;
