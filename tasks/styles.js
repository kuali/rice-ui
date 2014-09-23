var gulp = require('gulp');
var filter = require('gulp-filter');
var less = require('gulp-less');
var order = require('gulp-order');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');

gulp.task('styles', function() {
  var lessFilter = filter('**/*.less');

  var src = [
    'src/main/webapp/plugins/jqueryUI/jquery-ui-1.9.2.css',
    'src/main/webapp/themes/kboot/stylesheets/kboot.{less,css}',
    'src/main/webapp/plugins/jgrowl/jquery.jgrowl.css',
    'src/main/webapp/plugins/bootstrap-accessibility/bootstrap-accessibility.css',
    'src/main/webapp/plugins/textpopout/popoutTextarea.css',
    'src/main/webapp/plugins/fileupload/jquery.fileupload.css',
    'src/main/webapp/plugins/datatables/TableTools.css',
    'src/main/webapp/plugins/fancybox/jquery.fancybox.css',
    'src/main/webapp/plugins/prettify/prettify.css',
    'src/main/webapp/themes/kboot/stylesheets/jquery-overrides.css',
    'src/styles/main.{less,css}'
  ];

  var srcOrder = [
    'jquery-ui-1.9.2.css',
    'kboot.css',
    'jquery.jgrowl.css',
    'bootstrap-accessibility.css',
    'popoutTextarea.css',
    'jquery.fileupload.css',
    'TableTools.css',
    'jquery.fancybox.css',
    'prettify.css',
    'jquery-overrides.css',
    'main.css'
  ];

  return gulp.src(src)
    // Only process Less (not CSS) by the Less processor.
    .pipe(lessFilter)
    .pipe(less())
    .pipe(lessFilter.restore())
    // Because Less files are processed, they arrive later and shift source order.
    // Reorder the source array to match the original.
    .pipe(order(srcOrder))
    // Post-processor transformations.
    .pipe(prefix())
    // Bundle and output styles.
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./dist/assets'))
    // Inject CSS into browser.
    .pipe(browserSync.reload({ stream: true }));
});
