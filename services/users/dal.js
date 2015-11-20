var db = require('./../db');
var types = require('./../types');

var name = 'user';

var fields = {
	name: types.string,
	email: types.string
};

var options = {
	timestamps: true,
	createdAt: 'created_at',
	updatedAt: 'updated_at',
	removedAt: 'removed_at',
	tableName: 'users'
};

var User = db.define(name, fields, options);

module.exports = function () {
	return User;
};
