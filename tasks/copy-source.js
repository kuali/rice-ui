var gulp = require('gulp');
//var filter = require('gulp-filter');
var replace = require('gulp-replace');

//
// TO DO
//
// There's some really odd race condition occuring between the filter, replace, and dest,
// that only manifests when using the browser-sync task. Works fine when just
// using the build task.
//
// ./src/main/webapp/themes/kboot isn't duplicated.
//

gulp.task('copy-source', function() {
  //var htmlFilter = filter('**/*.html');

  return gulp.src('./node_modules/static-krad-sampleapp/krad-sampleapp/**/*')
    //.pipe(htmlFilter)
    // Replace `"themes/kboot/stylesheets/kboot.2.5.0-M7-SNAPSHOT.min.css"` relative references.
    .pipe(replace(/".*kboot.*\.css"/g, '"/assets/bundle.css"'))
    //.pipe(htmlFilter.restore())
    .pipe(gulp.dest('./dist'));
});
