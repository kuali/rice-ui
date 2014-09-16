var gulp = require('gulp');
var filter = require('gulp-filter');
var debug = require('gulp-debug');
var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');

gulp.task('styles', function() {
  var lessFilter = filter('**/*.less');

  return gulp.src([
      // Vendor
      'src/main/**/*.css',
      '!**/jquery.fancybox-*.css',
      '!**/jquery.dataTables.css',
      '!**/jquery.fileupload-ui.css',
      // Theme
      'src/main/webapp/themes/kboot/stylesheets/kboot.less',
      // Refactor
      'src/styles/main.less'
    ])
    .pipe(lessFilter)
    .pipe(less())
    .pipe(lessFilter.restore())
    .pipe(debug())
    .pipe(prefix())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./dist/assets'))
    .pipe(browserSync.reload({ stream: true }));
});
