/*global document, window, alert, console, require, browser,jasmine,
 requirePage, requireData, requireConfig, requireLibrary,
 describe, it, beforeEach, forEach, by, expect, element*/
//********** Require Pages*************//
var googleSearchPage = requirePage('googleSearchPage');
describe('TC7_VerifyGoogleSearch', function () {
    beforeEach(function () {
        global.current_TestCase = 'TC7_VerifyGoogleSearch';
    });
    it('TC7_VerifyGoogleSearch', function () {
       appLogger.Log("************************ TC7 Execution Started ***************************");
       appLogger.Log("************************ " + __filename + "***************************");
       googleSearchPage.performGoogleSearch();
    });
});