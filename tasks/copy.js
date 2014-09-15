var gulp = require('gulp');

gulp.task('copy', function() {
  return gulp.src('./src/main/webapp/krad/WEB-INF/ftl/**/*.ftl')
    .pipe(gulp.dest('./dist/ftl'));
});
