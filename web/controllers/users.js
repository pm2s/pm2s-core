var users = require('./../../core/users');

function findUserById(params) {
	return users.find(params.id)
}

module.exports = {
	create: users.create,
	list: users.list,
	find: findUserById
};
