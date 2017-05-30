/**
 * Created by MacBook on 2017/5/27.
 */
var gulp=require('gulp');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
var rev=require('gulp-rev');
var sass=require('gulp-sass');
var server=require('gulp-webserver');

//压缩文件
gulp.task('reduce',function(){
    gulp.src('index1.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

//合并文件
gulp.task('concat',function(){
    gulp.src(['index1.js','index2.js'])
        .pipe(concat('index_concat.js'))
        .pipe(gulp.dest('dist'));
});

//文件加密
gulp.task('md5',function(){
    gulp.src('dist/index_concat.js')
        .pipe(rev())
        .pipe(gulp.dest('dist'))
        .pipe(rev.manifest())
});

//sass编译
gulp.task('sass',function(){
    gulp.src('../css/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist'))
});

//server服务
gulp.task('server',function(){
    gulp.src('../')
        .pipe(server({
            open:true,
            livereload:true,
            directoryListing:true
        }))
});


