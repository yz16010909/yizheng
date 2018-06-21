var gulp=require('gulp');
var webserver=require('gulp-webserver');

gulp.task('webserver',function(){
  gulp.src('./')
    .pipe(webserver({
      port:8080,
      host:'localhost',
      livereload:true,
      directoryListing:true,
      open:true
    }))
})



//在cmd中输入: gulp webserver