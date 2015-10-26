var restify = require('restify');
var configureRoutes = require('./web/routes');
var config = require('./config');

var app = restify.createServer();
configureRoutes(app);

app.listen(config.get('port'), () => {
	console.log('pm2s-core is listening at %s', app.url);
});
