var gulp = require('gulp');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var proxy = require('browser-sync-instance')('proxy');

gulp.task('styles', function() {
  return gulp.src('src/**/*.css')
    .pipe(prefix())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./dist/assets'))
    .pipe(proxy.reload({ stream: true }));
});
