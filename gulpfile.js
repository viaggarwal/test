/*global document, window, alert, console, require, browser,jasmine,
 requirePage, requireData, requireConfig, requireLibrary,
 describe, it, beforeEach, forEach, by, jshint, expect, element, result*/
 /*jshint node: true, camelcase: false*/
 /*global require: true*/
 'use strict';

 var gulp = require('gulp'),
 jshint = require('gulp-jshint'),
 foreach = require('gulp-foreach'),
 gulpProtractorAngular = require('gulp-angular-protractor'),
 gulpStart = gulp.Gulp.prototype.start,
 currentStartTaskName;

 gulp.Gulp.prototype.start = function (task) {
    currentStartTaskName = task;
    gulpStart.apply(this, arguments);
};
function executeWebTests(suiteName, appName,browserName,specNames,excludedSpecs) {
    return gulp.src([])
    .pipe(gulpProtractorAngular({
        'configFile': './conf.js',
        'debug': true,
        'autoStartStopServer': true,
        args: [
        '--suite', suiteName,
        '--specs', specNames,
        '--exclude', excludedSpecs,
        '--capabilities.browserName', browserName,
        '--params.APPNAME', appName,
        '--params.SUITENAME', currentStartTaskName,
        '--capabilities.platformName', 'Windows'],
        keepAlive: false
    }))
    .on('error', function (e) {
        console.log('Ended with below ERROR::',e);
        process.exit(1);
    })
    .on('end', function () {
        console.log('Test complete');
        process.exit();
    });
}

gulp.task('SpragueSmokeSuite', ['JShint'], function () {
 executeWebTests('smokeTest', 'SPRAGUE_NATURAL_GAS','chrome');
});

gulp.task('SpragueCustomTestSuite', ['JShint'], function () {
    executeWebTests('customTest','SPRAGUE_NATURAL_GAS','chrome');
});

gulp.task('JShint', function () {
    gulp.src(['**/*.json', '!node_modules/**/*.*', '!JasmineResult/**/*.*', 'conf.js', 'gulpfile.js', 'library/actionLibrary.js', 'utils/logger.js', 'package.json'])
    .pipe(jshint());
});