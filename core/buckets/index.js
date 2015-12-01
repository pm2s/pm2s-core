var dal = require('./dal')();

function create (params) {
	return dal.create(params);
}

function list () {
	return dal.findAll();
}

function find (id) {
	var where = { id };
	return dal.findOne({ where });
}

module.exports = { create, list, find };
