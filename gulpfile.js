var gulp = require('gulp');
var deploy = require('gulp-gh-pages');

gulp.task('publish', function () {
  return gulp.src("./_book/**/*")
    .pipe(deploy({
      remoteUrl: "https://github.com/shsui5379/notes.git",
      branch: "gh-pages"
    }))
});