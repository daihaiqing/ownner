var gulp = require('gulp'),
	babel = require('gulp-babel'),
	sass = require('gulp-sass');

gulp.task('es6', function () {
	gulp.src('./script/*.js')
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(gulp.dest('./dist/js'));
});
gulp.task('watch:es6', function () {
	gulp.watch('./script/*.js', ['es6']);
});

gulp.task('sass', function () {
	return gulp.src('./sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});

gulp.task('watch:sass', function () {
	gulp.watch('./sass/*.scss', ['sass']);
});
