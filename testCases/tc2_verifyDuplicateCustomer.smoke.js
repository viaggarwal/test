/*global document, window, alert, console, require, browser,jasmine,
 requirePage, requireData, requireConfig, requireLibrary,
 describe, it, beforeEach, forEach, by, expect, element*/
//********** Require Pages*************//
var homePage = requirePage('homePage');
describe('TC2_DuplicateCustomer', function () {
    beforeEach(function () {
        global.current_TestCase = 'TC2_DuplicateCustomer';
    });
    it('TC2 - Duplicate Customer', function () {
       appLogger.Log("************************ TC2 Execution Started ***************************");
       appLogger.Log("************************ " + __filename + "***************************");
        homePage.openHome()
            .getNewCustomerPage()
            .fillNewCustomerDetails(global.TIMESTAMP)
            .clickSaveButton()
            .verifyNewCustomerErrorMessage();
    });
});