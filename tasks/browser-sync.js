var gulp = require('gulp');
var browserSyncInstance = require('browser-sync-instance');
var bsAssets = browserSyncInstance();
var bsProxy = browserSyncInstance('proxy');

// Static server
gulp.task('browser-sync', ['build'], function() {

  bsAssets({
    server: {
      baseDir: './dist'
    },
    open: false
  });

  bsProxy({
    proxy: 'localhost:8080',
    startPath: '/krad-dev/',
    port: 4000
  });

});
