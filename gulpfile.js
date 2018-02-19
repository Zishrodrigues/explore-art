var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('js', function(){
  return gulp.src('static/js/*.js')
  .pipe(concat('app.min.js'))
  .pipe(gulp.dest('build/js'))
});


gulp.task('default', [ 'js' ]);
