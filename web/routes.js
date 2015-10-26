module.exports = app => {
	app.get('/hello/:name', function respond (req, res) {
		res.send('hello ' + req.params.name);
	});
};
