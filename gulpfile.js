var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('server', ['sass'], function () {

    browserSync.init({
        server: "./test"
    });

    gulp.watch("test/*.scss", ['sass']);
    gulp.watch("test/*.html").on('change', browserSync.reload);
    gulp.watch("test/**/*.css").on('change', browserSync.reload);
});

// Compile sass into CSS and inject into browsers
gulp.task('sass', function () {
    return gulp.src("test/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("test/dist"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['server']);