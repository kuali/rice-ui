var gulp = require('gulp');

gulp.task('copy-assets', function() {
  return gulp.src('./src/main/webapp/**/*.{png,eot,svg,ttf,woff}')
    .pipe(gulp.dest('./dist/assets'));
});
