var apps = require('./../../core/apps');

function findBucketById (params) {
	return apps.find(params.id);
}

module.exports = {
	create: apps.create,
	list: apps.list,
	find: findBucketById
};
