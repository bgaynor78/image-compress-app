const gulp = require('gulp'),
      del = require('del');

gulp.task('build-clean', function() {
  return del(['dist/**'])
    .then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
  });
});