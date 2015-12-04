var db = require('./../db');
var t = require('./../types');
var Bucket = require('./../buckets');

var name = 'app';

var fields = {
	bucketId: {
		type: t.id,
		field: 'bucket_id',
		references: {
			model: Bucket,
			key: 'id'
		}
	}
};

var options = {
	timestamps: true,
	createdAt: 'created_at',
	updatedAt: 'updated_at',
	removedAt: 'removed_at',
	tableName: 'apps'
};

var Model = db.define(name, fields, options);

module.exports = function () {
	return Model;
};
