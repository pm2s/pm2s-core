var controller = require('app-controller');

var users = controller(require('./controllers/users'));
var buckets = controller(require('./controllers/buckets'));
var apps = controller(require('./controllers/apps'));

module.exports = app => {
	app.post('/users', users.create);
	app.get('/users', users.list);
	app.get('/users/:id', users.find);

	app.post('/buckets', buckets.create);
	app.get('/buckets', buckets.list);
	app.get('/buckets/:id', buckets.find);

	app.post('/apps', apps.create);
	app.get('/apps', apps.list);
	app.get('/apps/:id', apps.find);
};
