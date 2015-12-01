var buckets = require('./../../core/buckets');

function findBucketById(params) {
	return buckets.find(params.id)
}

module.exports = {
	create: buckets.create,
	list: buckets.list,
	find: findBucketById
};
