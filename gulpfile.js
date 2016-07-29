'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var fileinclude = require('gulp-file-include');
var Server = require('karma').Server;
var babel = require('gulp-babel');
var concat = require('gulp-concat');

// SASS
gulp.task('clean-css', function () {
  return gulp.src('./public/css/*', {read: false})
    .pipe(clean());
});
gulp.task('sass', ['clean-css'], function () {
  return gulp.src(['src/sass/css-reset.scss', 'src/sass/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/css'));
});

// IMAGES
gulp.task('clean-images', function () {
  return gulp.src('./public/images/*', {read: false})
    .pipe(clean());
});
gulp.task('copyimages', ['clean-images'], function() {
 gulp.src('src/images/**')
    .pipe(gulp.dest('public/images'));
});

// HTML
gulp.task('clean-html', function () {
  return gulp.src('./public/*.html', {read: false})
    .pipe(clean());
});
gulp.task('fileinclude', ['clean-html'], function() {
  gulp.src(['src/html/*.html', '!src/html/*.partial.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('public'));
});

// JS
gulp.task('clean-js', function () {
  return gulp.src('./public/js', {read: false})
    .pipe(clean());
});
gulp.task('babel', ['clean-js'], function () {
  return gulp.src(['src/js/*.js', '!src/js/*.Spec.js'])
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./public/js/'));
});

// TESTING
gulp.task('test', function (done) {
  return new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});
gulp.task('test:watch', function (done) {
  return new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/images/**/*', ['copyimages']);
  gulp.watch('src/html/*', ['fileinclude']);
  gulp.watch('src/js/*', ['babel', 'fileinclude']);
});

// Default Task
gulp.task('default', ['sass', 'copyimages', 'fileinclude', 'babel', 'watch']);

// Travis (prod) Task
gulp.task('travis', ['sass', 'copyimages', 'fileinclude', 'babel', 'test']);
