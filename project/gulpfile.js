//导入所需的模块
let gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin');


//创建任务
function fnSass(){
    return gulp.src('./src/sass/*.scss')
    .pipe(sass({outputStyle:'expanded'}))
    // .pipe(cssnano());
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/css'));
}
//压缩图片
function fnImg(){
    return gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
}


function fnWatch(){
    gulp.watch('./src/sass/*.scss',fnSass);
}
//导入任务
// exports.sass = fnSass;
// exports.img = fnImg;
exports.default = fnWatch;
