var dal = require('./dal')();

function create (params) {
	return dal.create(params);
}

function list () {
	return dal.findAll();
}

module.exports = {
	create: create,
	list: list
};
