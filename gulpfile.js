var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
 autopre = require('gulp-autoprefixer'),
 minicss = require('gulp-minify-css'),
 livereload = require('gulp-livereload'),
 imagemin = require('gulp-imagemin');
gulp.task('js', function() {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('css', function() {
    gulp.src('css/*.css')
        .pipe(autopre())
        .pipe(minicss())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('build'));
});

gulp.task('images', function () {
    gulp.src('images/*.*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('build/images'))
});

gulp.task('build', ['css', 'js','images']);

gulp.task('watch', function () {
   livereload.listen();
   gulp.watch('js/*.js').on('change', livereload.changed);
   gulp.watch('css/*.css').on('change', livereload.changed);
   gulp.watch('images/*.*').on('change', livereload.changed);
});

gulp.task('default', ['build','watch']);
