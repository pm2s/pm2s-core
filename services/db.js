var config = require('../config');
var Sequelize = require('sequelize');

var url = config.get('db:url');
var db = new Sequelize(url);

module.exports = db;
