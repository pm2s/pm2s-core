var gulp = require('gulp');
var argv = require('yargs').argv;
var shell = require('gulp-shell');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

var src = [
	'./src/*',
	'./test/*'
];

gulp.task('migrate-up', shell.task('sequelize db:migrate'));
gulp.task('migrate-down', shell.task('sequelize db:migrate:undo'));
gulp.task('create-migration', shell.task('sequelize migration:create --name=' + argv.name));

gulp.task('jshint', function () {
	return gulp.src(src)
		.pipe(jshint())
		.pipe(jshint.reporter())
		.pipe(jshint.reporter('fail'));
});

gulp.task('jscs', function () {
	return gulp.src(src)
		.pipe(jscs())
		.pipe(jscs.reporter())
		.pipe(jscs.reporter('fail'));
});

gulp.task('test', ['jscs']);
