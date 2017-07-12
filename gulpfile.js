var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass2', function(){
   gulp.src('sass/main.sass')
       .pipe(sass())
       .pipe(gulp.dest('css'));
});
