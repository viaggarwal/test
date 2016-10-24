/**
 * Created by e002239 on 10/17/2016.
 */
/*global document, window, alert, console, require, browser,jasmine,
 requirePage, requireData, requireConfig, requireLibrary,
 describe, it, beforeEach, forEach, by, includes, expect, titlePromise, includes , element, $, then, $locatorRepeater, calenderInputData*/
/* The Page Object Representation of the Alarm Type Page.
 */
'use strict';

//**************************** Required web data*************************************//
var genericData = requireData('genericData'),
    loginLink = locatorXpath('.//*[@id="app"]/div/div[2]/div[2]/div[3]/div[3]/div'),
    wrongLink = locatorXpath('.//*[@id33="app"]/div/div[2]/div[2]/div[3]/div[3]/div')/*,
    username = locatorName('username'),
    password = locatorName('password')*/;

module.exports = {
    openPaytmPage: function () {
        actions.Get(genericData.paytm.URL);
        actions.Click(loginLink,"clicking login link");
        //return requirePage('homePage');
    },
    failingPage: function(){
        actions.Get(genericData.paytm.URL);
        actions.Click(wrongLink,"clicking login link");
    }/*,
    enterCredentials : function() {
        var driver = browser.driver;
        actions.SetText(username,"srujana","UserName");
    }*/
};