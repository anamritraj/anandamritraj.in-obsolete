var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://localhost/anandamritraj/"
    });
});

gulp.task('styles', function() {
    gulp.src('assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('css', function(){
	return gulp.watch("assets/**/*.css").on('change', browserSync.reload);
});

gulp.task('php', function(){
	return gulp.watch("**/*.php").on('change', browserSync.reload);
});

gulp.task('js', function(){
	return gulp.watch("assets/**/*.js").on('change', browserSync.reload);
});

//Watch task
gulp.task('scss', function() {
    return gulp.watch('assets/scss/**/*.scss', ['styles']);
});

gulp.task('default', ['browser-sync','scss', 'php', 'js', 'css']);