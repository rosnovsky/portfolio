var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');
const stylus = require('gulp-stylus');
const watch = require('gulp-watch');

/**
 * Gulp Tasks
 */

gulp.task('stylus', function() {
  gulp.src('src/styles/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./public/stylesheets/'))
    .pipe(reload({stream:true}));
});



gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init({
    proxy: "localhost:3000",  // local node app address
    port: 1337
  });
});

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'bin/www',
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
  })
  .on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', function () {
    setTimeout(function () {
      reload({ stream: false });
    }, 1000);
  });
});

gulp.task('watch', function() {
  gulp.watch('./src/styles/*.styl', ['stylus']);
});

gulp.task('default', ['browser-sync', 'stylus', 'nodemon', 'watch'])
