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
  browserSync({
    proxy: "localhost:1982",  // local node app address
    port: 1666,  // use *different* port than above
    notify: true
  });
});

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'bin/www',
    ext: 'js pug html',
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
