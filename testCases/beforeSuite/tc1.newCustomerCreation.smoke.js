/*global document, window, alert, console, require, browser,jasmine,
 requirePage, requireData, requireConfig, requireLibrary,
 describe, it, beforeEach, forEach, by, expect, element*/
//********** Require Pages*************//
var homePage = requirePage('homePage');
describe('TC1_NewCustomer', function () {
    beforeEach(function () {
        global.current_TestCase = "TC1_NewCustomer";
    });
    it('TC1_NewCustomer', function () {
        appLogger.Log("************************ TC1 Execution Started ***************************");
        appLogger.Log("************************ " + __filename + "***************************");
        homePage.openHome()
            .getNewCustomerPage()
            .fillNewCustomerDetails(global.TIMESTAMP)
            .clickSaveButton()
            .verifyNewCustomerSuccessMessage();
    });
});