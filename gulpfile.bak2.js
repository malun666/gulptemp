const gulp = require('gulp');
const sass = require('gulp-sass');

// gulp.task('test', function(cb) {
//   console.log('test 任务');
//   cb(); // 当前gulp支持串行执行任务和并行执行任务。
// });

function test(cb) {
  console.log('test 任务');
  cb(); // 当前gulp支持串行执行任务和并行执行任务。
}

function style() {
  console.log('style 任务')
  return gulp.src('./src/style/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/style/css/'));
}

function dev() {
  gulp.watch('./src/style/scss/**/*.scss', gulp.series(test, style));
}

gulp.task('dev', dev);


// series可以帮助我们顺序的 串行执行。
// gulp.task('default', gulp.series(test, style));
gulp.task('default', gulp.parallel(test, style));

