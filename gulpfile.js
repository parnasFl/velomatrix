var gulp = require('gulp'),
		wiredep = require('wiredep').stream;

// Connecting to bower_components

gulp.task('wiredep', function () {
	gulp.src('app/*.html')
		.pipe(wiredep())
		.pipe(gulp.dest('app/'));
});





//*************Functions************
//============================================

var log = function (error) {
	console.log([
		'',
		'-------------ERROR MESSAGE START--------------',
		('[' + error.name + ' in' + error.plugin + ']'),
		error.message,
		'-------------ERROR MESSAGE END----------------',
		''
].join('\n'));
this.end();
};

//Gulp Function naming.
//gulp.task(name, deps, fn);