var gulp = require('gulp');
var replace = require('gulp-replace');

gulp.task('copy-html', function() {
  return gulp.src('./node_modules/static-krad-sampleapp/krad-sampleapp/**/*.html')
    // Replace `"themes/kboot/stylesheets/kboot.2.5.0-M7-SNAPSHOT.min.css"` relative references.
    .pipe(replace(/".*kboot.*\.css"/g, '"/assets/bundle.css"'))
    .pipe(gulp.dest('./dist'));
});
