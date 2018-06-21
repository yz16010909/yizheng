var gulp=require('gulp');
var pump=require('pump');
var rename=require('gulp-rename');
var prefixer=require('gulp-autoprefixer');
var uglify=require('gulp-uglify');

gulp.task('prefixer',function(cb){
	pump([
			gulp.src('./style/*.css'),
			prefixer({
				borwsers:["last 2 version"],
				remove:true,
				cascade:false
			}),
			rename({'suffix':'.min'}),
			gulp.dest('./style')
		],cb)
});

gulp.task('ugly',function(cb){
	pump([
		gulp.src('script/*.js'),
		rename({'suffix':'.min'}),
		uglify(),
		gulp.dest('script')
		],cb)
})

gulp.task('default',['prefixer','ugly']);
//自动化处理