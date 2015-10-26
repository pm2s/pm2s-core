var restify = require('restify');
var configureRoutes = require('./web/routes');

var app = restify.createServer();
configureRoutes(app);

app.listen(8080, () => {
	console.log('%s listening at %s', app.name, app.url);
});
