var controller = require('app-controller');

var users = controller(require('./controllers/users'));

module.exports = app => {
	app.post('/users', users.create);
	app.get('/users', users.list);
};
