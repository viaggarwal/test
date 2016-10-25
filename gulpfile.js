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
    SpragueSmokeTestCasesPath = "./testCases/beforeSuite/tc1.newCustomerCreation.smoke.js," +
        "./testCases/tc4.editProspectSalesRep.smoke.js,",
    SpragueGoogleSearchPath = "./testCases/tc7_verifyGoogleSearch.smoke.js" ,
    paytmPath = "./testCases/paytmFailingSpec.js,"+"./testCases/paytmHomePage.js," +"./testCases/paytmDuplicateSpec.js",
    //paytmPath = "./testCases/paytmHomePage.js",
    gulpStart = gulp.Gulp.prototype.start,
    currentStartTaskName;

gulp.Gulp.prototype.start = function (task) {
    currentStartTaskName = task;
    gulpStart.apply(this, arguments);
};
function executeWebTests(specNames, excludedSpecs, appName) {
    return gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './conf.js',
            'debug': true,
            'autoStartStopServer': true,
            args: ['--specs', specNames,
                '--exclude', excludedSpecs,
                '--capabilities.browserName', 'chrome',
                '--params.APPNAME', appName,
                '--params.SUITENAME', currentStartTaskName,
                '--capabilities.platformName', 'Windows'],
            keepAlive: false
        }))
        .on('error', function (e) {
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E Testing complete');
            process.exit();
        });
}
// To start tests using gulp-angular-protractor use 'gulp angularprotractor'
gulp.task('SpragueSmokeSuite', ['JShint'], function () {
   executeWebTests(SpragueSmokeTestCasesPath, ' ', 'SPRAGUE_NATURAL_GAS');
});

gulp.task('SpragueTestSuite', ['JShint'], function () {
    // executeWebTests(SpraguesampleTestCasesPath, ' ', 'SPRAGUE_NATURAL_GAS');

    gulp.src([]).pipe(gulpProtractorAngular({
        configFile: 'conf.js',
        args: [
        '--suite', 'customTest'
        ]
    })).on('error', function(e) {
        console.log(e);
    }).on('end', function(end){
        console.log('#END');
    });

});

gulp.task('GoogleSearch', ['JShint'], function () {
    executeWebTests(SpragueGoogleSearchPath, ' ', 'GOOGLE_SEARCH');
});
gulp.task('paytm', ['JShint'], function () {
    executeWebTests(paytmPath, ' ', 'paytm page open');
});
gulp.task('JShint', function () {
    gulp.src(['**/*.json', '!node_modules/**/*.*', '!JasmineResult/**/*.*', 'conf.js', 'gulpfile.js', 'library/actionLibrary.js', 'utils/logger.js', 'package.json'])
        .pipe(jshint());
});