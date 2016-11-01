var gulp           = require('gulp'),
		wiredep 			 = require('wiredep').stream,
		sass           = require('gulp-sass'),
		cleanCSS       = require('gulp-clean-css'),
		pug            = require('gulp-pug'),
		browserSync    = require('browser-sync'),
		//concat         = require('gulp-concat'),
		del            = require('del'),
		rename         = require('gulp-rename'),
		imagemin       = require('gulp-imagemin'),
		cache          = require('gulp-cache'),
		useref         = require('gulp-useref'),
		gulpif         = require('gulp-if'),
		uglify         = require('gulp-uglify'),
		autoprefixer   = require('gulp-autoprefixer'),
		fileinclude    = require('gulp-file-include'),
		filter    		 = require('gulp-filter'),
		size           = require('gulp-size'),
		prettify       = require('gulp-prettify'),
		reload         = browserSync.reload,
		bourbon        = require('node-bourbon');


//=========================================================
//=========================================================
//========================APP Tasks========================

//Compiling PUG files
gulp.task('pug', function () {
	gulp.src('app/templates/pages/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(wiredep({
				//directory: './app/js/vendor',
				ignorePath: /^(\.\.\/)*\.\./,
				exclude: './app/js/vendor/picturefill/dist/picturefill.min.js'
		}))
		.on('error', log)
		.pipe(prettify({indent_size: 2}))
		.pipe(gulp.dest('app/'))
		.pipe(reload({stream: true}));
});

//SCSS Task
gulp.task('scss',['headerscss'], function () {
	gulp.src('app/scss/**/*.scss')
	.pipe(sass({
		includePaths: bourbon.includePaths
	}).on('error', sass.logError))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleanCSS())
	.pipe(gulp.dest('app/css'))
	.pipe(reload({stream: true}));
});

//SCSS Task
gulp.task('headerscss', function () {
	gulp.src('app/header.scss')
	.pipe(sass({
		includePaths: bourbon.includePaths
	}).on('error', sass.logError))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleanCSS())
	.pipe(gulp.dest('app'))
	.pipe(reload({stream: true}));
});

//Local browserSync Server
gulp.task('server', ['pug'],function(){
	browserSync({
		notify: false,
		port: 9000,
		server: {
			baseDir: 'app'
		}
	});
});

//=========================================================
//=========================================================
//========================BUILD============================

//Task for removing 'dist' folder before every 'build' task
gulp.task('clean', function() {
	return del.sync('dist');
});

//Useref
gulp.task('useref', function(){

	return gulp.src('app/*.html')
		//.pipe(gulpRemoveHtml())
		.pipe(fileinclude({
			prefix: '@@'
		}))
		.pipe(useref())
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulpif('*.css', cleanCSS({compatibility: 'ie8'})))
		.pipe(gulp.dest('dist'));
});

//Copying fonts
// gulp.task('fonts', function(){
// 	gulp.src('app/fonts/*')
// 	.pipe(filter(['*.eot','*.svg','*.ttf','*.woff','*.woff2']))
// 	.pipe(gulp.dest('dist/fonts/'));
// });
gulp.task('fonts', function(){
	gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));
});
//Copying Images
gulp.task('images', function(){
	return gulp.src('app/img/**/*')
	.pipe(imagemin({
		progressive: true,
		interlaced: true
	}))
	.pipe(gulp.dest('dist/img'));
});

//Other files
gulp.task('extras', function(){
	return gulp.src([
		'app/*.*',
		'!app/*.html',
		'!app/*.scss',
		'!app/*.pug'
	]).pipe(gulp.dest('dist'));
});

//CSS files
gulp.task('css', function(){
	return gulp.src([
			'app/css/fonts.min.css',
			'app/css/style.min.css'
			]).pipe(gulp.dest('dist/css'));
});

//CSS files
gulp.task('js', function(){
	return gulp.src([
			'app/js/common.js',
			'app/js/vendor/picturefill/dist/picturefill.min.js'
			]).pipe(gulp.dest('dist/js'));
});


//Build and display the size of build folder
gulp.task('dist', ['useref', 'css','js','images', 'fonts', 'extras'], function(){
	return gulp.src('dist/**/*').pipe(size({title: 'build'}));
});

//Creating folder dist
gulp.task('build', ['clean', 'pug'], function() {
	gulp.start('dist');
});


//=========================================================
//=========================================================
//========================Watch and Default================

//Watch Tasks
gulp.task('watch',['pug', 'scss'], function () {
	gulp.watch('app/templates/**/*.pug', ['pug']);
	gulp.watch('app/scss/**/*.scss', ['scss']);
	gulp.watch('bower.json', ['wiredep']);
	gulp.watch([
		'app/js/**/*.js',
		'app/css/**/*.css'
	]).on('change', reload);
});

//Default Tasks
gulp.task('default', ['server', 'watch']);

//*************Functions************
//============================================

var log = function (error) {
	console.log([
		'',
		//'-------------ERROR MESSAGE START--------------',
		('[' + error.name + ' in' + error.plugin + ']'),
		error.message,
		//'-------------ERROR MESSAGE END----------------',
		''
].join('\n'));
this.end();
};


gulp.task('clear', function () {
	return cache.clearAll();
});
//Gulp Function naming.
//gulp.task(name, deps, fn);

