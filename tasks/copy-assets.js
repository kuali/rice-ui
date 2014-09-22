var gulp = require('gulp');

gulp.task('copy-assets', function() {
  return gulp.src([
      './node_modules/static-krad-sampleapp/krad-sampleapp/**/*',
      '!**/*.html'
    ])
    .pipe(gulp.dest('./dist'));
});
