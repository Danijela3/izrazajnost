/* global require */
// var gulp = require('gulp');
import gulp from 'gulp';
// var sass = require('gulp-sass');
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
// var notify = require('gulp-notify');
import notify from 'gulp-notify';
// var plumber = require('gulp-plumber');
import plumber from 'gulp-plumber';
// var autoprefixer = require('gulp-autoprefixer');
import autoprefixer from 'gulp-autoprefixer';
// var lec = require('gulp-line-ending-corrector');
import lec from 'gulp-line-ending-corrector';

/**
 * sass task, will compile the .SCSS files,
 * and handle the error through plumber and notify through system message.
 */
gulp.task('sass', gulp.series(function() {
    return gulp.src('./sass/**/**/**/*.scss')
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.messageOriginal %>")
        }))
        .pipe(sass({ outputStyle: 'expanded' })) /* compressed */
        .pipe(autoprefixer())
        .pipe(lec({ verbose: true, eolc: 'CRLF', encoding: 'utf8' }))

    .pipe(gulp.dest('./'))
}));

gulp.task('serve', gulp.series('sass', () => {
    gulp.watch("./sass/**/*.scss", gulp.series('sass'));
}));

gulp.task('default', gulp.series('serve'));
gulp.task('build', gulp.series('sass'));


