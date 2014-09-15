var gulp = require('gulp');
var merge = require('merge-stream');
var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var proxy = require('browser-sync-instance')('proxy');

gulp.task('styles', function() {

  var vendor = gulp.src([
      'src/**/*.css',
      '!jquery.fancybox-*.css',
      '!jquery.dataTables.css',
      '!jquery.fileupload-ui.css'
    ]);

  var source = gulp.src('src/main/webapp/themes/kboot/stylesheets/kboot.less')
    .pipe(less());

  return merge(vendor, source)
    .pipe(prefix())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./dist/assets'))
    .pipe(proxy.reload({ stream: true }));
});
