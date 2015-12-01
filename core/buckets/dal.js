var db = require('./../db');
var t = require('./../types');
var User = require('./../users');

var name = 'bucket';

var fields = {
	userId: {
		type: t.id,
		field: 'user_id',
		references: {
			model: User,
			key: 'id'
		}
	}
};

var options = {
	timestamps: true,
	createdAt: 'created_at',
	updatedAt: 'updated_at',
	removedAt: 'removed_at',
	tableName: 'buckets'
};

var Model = db.define(name, fields, options);

module.exports = function () {
	return Model;
};
