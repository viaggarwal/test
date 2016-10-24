/**
 * Created by e002239 on 10/17/2016.
 */
/*global document, window, alert, console, require, browser,jasmine,
 requirePage, requireData, requireConfig, requireLibrary,
 describe, it, beforeEach, forEach, by, expect, element*/
//********** Require Pages*************//
var paytmPage = requirePage('paytmPage');
describe('paytmHomePage', function () {
    beforeEach(function () {
        global.current_TestCase = 'paytmHomePage';
    });
    it('TC7_VerifyGoogleSearch', function () {
        appLogger.Log("************************ paytmHomePage ***************************");
        appLogger.Log("************************ " + __filename + "***************************");
        paytmPage.openPaytmPage();
    });
});