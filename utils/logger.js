/*global document, window, alert, console, require, browser,jasmine,
 requirePage, requireData, requireConfig, requireLibrary,
 describe, it, beforeEach, forEach, by, expect, element*/
/**
 * Logger functionality, maintains log the testcase flow while automation.
 * @class logger
 */
 'use strict';
 var logfilepath,
 logfilepath_user,
 log4js = require('log4js'),
 logger,
 logger_user;

 module.exports = {
    Info: function (log_dir, fileName, TIMESTAMP) {
        require('fs').mkdir(log_dir, function () {
            console.log("Log directory created!");
        });
        var logfilepath = log_dir +"/"+ fileName + '-' + TIMESTAMP + '.csv',
        log4js = require('log4js'),
        logger = log4js.getLogger('');
        log4js.loadAppender('file');
        log4js.addAppender(log4js.appenders.file(logfilepath), '');
        logger.setLevel('log4js.levels.ERROR');
        return logger;
    },
    /**
     * Function to log data in a file with 'debug' level. This is default function used.
     * @method Log
     * @param {String} TestStepDesc
     * @returns {none}
     */
     Log: function (TestStepDesc) {
        var suiteName = global.SUITENAME, BrowserName;
        var currTimeStamp = global.TIMESTAMP;
        if (suiteName !== '') {
            
            BrowserName = global.browserName.toUpperCase();
            logfilepath = './results/' + suiteName + '-' + BrowserName + '-' + currTimeStamp + '.csv';
            log4js.loadAppender('file');
            log4js.addAppender(log4js.appenders.console());
            log4js.addAppender(log4js.appenders.file(logfilepath), suiteName);
            logger = log4js.getLogger(suiteName);
            logger.setLevel(global.LOGLEVEL);
            logger.debug(TestStepDesc);
            log4js.clearAppenders();
            
        }
    },
    /**
     *Function to log data in a file with 'debug' level.
     * @method LogDebug
     * @param {String} TestStepDesc
     * @returns {none}
     */
     LogDebug: function (TestStepDesc) {
        var TCName = global.current_TestCase, BrowserName;
        var currTimeStamp = global.TIMESTAMP;
        if (TCName !== '') {
            
            BrowserName = global.browserName.toUpperCase();
            logfilepath = './results/' + TCName + '-' + BrowserName + '-' + currTimeStamp + '.csv';
            log4js.loadAppender('file');
            log4js.addAppender(log4js.appenders.console());
            log4js.addAppender(log4js.appenders.file(logfilepath), TCName);
            logger = log4js.getLogger(TCName);
            logger.setLevel(global.LOGLEVEL);
            logger.debug(TestStepDesc);
            log4js.clearAppenders();
            
        }
    },
    /**
     *Function to log data in a file with 'error' level.
     * @method LogError
     * @param {String} TestStepDesc
     * @returns {none}
     */
     LogError: function (TestStepDesc) {
        var TCName = global.current_TestCase, BrowserName;
        var currTimeStamp = global.TIMESTAMP;
        if (TCName !== '') {
            
            BrowserName = global.browserName.toUpperCase();
            logfilepath = './results/logs/' + TCName + '-' + BrowserName + '-' + currTimeStamp + '.log';
            log4js.loadAppender('file');
            log4js.addAppender(log4js.appenders.console());
            log4js.addAppender(log4js.appenders.file(logfilepath), TCName);
            logger = log4js.getLogger(TCName);
            logger.setLevel(global.LOGLEVEL);
            logger.error(TestStepDesc);
            log4js.clearAppenders();
            
        }
    },
    /**
     * Function to log data in a file with 'info' level.
     * @method LogInfo
     * @param {String} TestStepDesc
     * @returns {none}
     */
     LogInfo: function (TestStepDesc) {
        var TCName = global.current_TestCase, BrowserName;
        var currTimeStamp = global.TIMESTAMP;
        if (TCName !== '') {
            
            BrowserName = global.browserName.toUpperCase();
            logfilepath = './results/logs/' + TCName + '-' + BrowserName + '-' + currTimeStamp + '.log';
            log4js.loadAppender('file');
            log4js.addAppender(log4js.appenders.console());
            log4js.addAppender(log4js.appenders.file(logfilepath), TCName);
            logger = log4js.getLogger(TCName);
            logger.setLevel(global.LOGLEVEL);
            logger.info(TestStepDesc);
            log4js.clearAppenders();
            
        }
    },
    /**
     * Function to log data in a file with 'warn' level.
     * @method LogWarn
     * @param {String} TestStepDesc
     * @returns {none}
     */
     LogWarn: function (TestStepDesc) {
        var TCName = global.current_TestCase, BrowserName;
        var currTimeStamp = global.log_timeStamp;
        if (TCName !== '') {
            
            BrowserName = global.browserName.toUpperCase();
            logfilepath = './results/logs/' + TCName + '-' + BrowserName + '-' + currTimeStamp + '.log';
            log4js.loadAppender('file');
            log4js.addAppender(log4js.appenders.console());
            log4js.addAppender(log4js.appenders.file(logfilepath), TCName);
            logger = log4js.getLogger(TCName);
            logger.setLevel(global.LOGLEVEL);
            logger.warn(TestStepDesc);
            log4js.clearAppenders();
            
        }
    },
    /**
     * Function to log data in a file with 'fatal' level.
     * @method LogFatal
     * @param {String} TestStepDesc
     * @returns {none}
     */
     LogFatal: function (TestStepDesc) {
        var TCName = global.current_TestCase, BrowserName;
        var currTimeStamp = global.TIMESTAMP;
        if (TCName !== '') {
            
            BrowserName = global.browserName.toUpperCase();
            logfilepath = './results/logs/' + TCName + '-' + BrowserName + '-' + currTimeStamp + '.log';
            log4js.loadAppender('file');
            log4js.addAppender(log4js.appenders.console());
            log4js.addAppender(log4js.appenders.file(logfilepath), TCName);
            logger = log4js.getLogger(TCName);
            logger.setLevel(global.LOGLEVEL);
            logger.fatal(TestStepDesc);
            log4js.clearAppenders();
            
        }
    },
    /**
     * Function to log user data in a file with 'info' level.
     * @method userLogInfo
     * @param {String} message
     * @returns {none}
     */
     userLogInfo: function (message) {
        setUserLogProperties();
        logger_user.info(global.current_TestCase + ': ' + message);
    },
    /**
     * Function to log user data in a file with 'debug' level.
     * @method userLogDebug
     * @param {String} message
     * @returns {none}
     */
     userLogDebug: function (message) {
        setUserLogProperties();
        logger_user.debug(global.current_TestCase + ': ' + message);
    },
    /**
     * Function to log user data in a file with 'warn' level.
     * @method userLogWarn
     * @param {String} message
     * @returns {none}
     */
     userLogWarn: function (message) {
        setUserLogProperties();
        logger_user.warn(global.current_TestCase + ': ' + message);
    },
    /**
     * Function to log user data in a file with 'error' level.
     * @method userLogError
     * @param {String} message
     * @returns {none}
     */
     userLogError: function (message) {
        setUserLogProperties();
        logger_user.error(global.current_TestCase + ': ' + message);
    },
    /**
     * Function to log user data in a file with 'fatal' level.
     * @method userLogFatal
     * @param {String} message
     * @returns {none}
     */
     userLogFatal: function (message) {
        setUserLogProperties();
        logger_user.fatal(global.current_TestCase + ': ' + message);
    },
};
/**
 * Function to set user log properties. DO NOT USE this function. This function is called implicitly.
 * @method setUserLogProperties
 * @param {none} none No Params required
 * @returns {none}
 */
 function  setUserLogProperties() {
    log4js.clearAppenders();
    var currTimeStamp = global.TIMESTAMP;
    logfilepath_user = './results/logs/userLogs' + '--' + new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate() + currTimeStamp + '.log';
    log4js.loadAppender('file');
    log4js.addAppender(log4js.appenders.console());
    log4js.addAppender(log4js.appenders.file(logfilepath_user), 'SIS Automation');
    logger_user = log4js.getLogger('SIS Automation');
    logger_user.setLevel(global.LOGLEVEL);
}