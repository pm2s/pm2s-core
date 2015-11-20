var express = require('express');
var configureMiddlewares = require('./middlewares');
var configureRoutes = require('./routes');
var config = require('./../config/index');

var app = express();
configureMiddlewares(app);
configureRoutes(app);

app.listen(config.get('port'), () => {
	console.log('pm2s-core is listening at %s', config.get('port'));
});
