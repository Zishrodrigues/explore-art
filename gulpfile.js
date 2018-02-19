var gulp = require('gulp');

gulp.task('js', function(){
  return gulp.src('static/js/*.js')
  .pipe(gulp.dest('build/js'))
});


gulp.task('default', [ 'js' ]);
