/*global document, window, alert, console, require, browser,jasmine,
 requirePage, requireData, requireConfig, requireLibrary,
 describe, it, beforeEach, forEach, by, expect, element*/
//********** Require Pages*************//
var homePage = requirePage('homePage');
describe('TC3_EditCustomer-Active-Sales Rep', function () {
    beforeEach(function () {
        global.current_TestCase = 'TC3_EditCustomer-Active-Sales Rep';
    });
    it('TC3 - Edit Customer - Active - Sales Rep', function () {
        appLogger.Log("************************ TC3 Execution Started ***************************");
        appLogger.Log("************************ " + __filename + "***************************");
        homePage.openHome()
            .getCustomersPage()
            .performSearchForCustomers("106 Grill","Active")
            .verifyNameFieldEditable(false);
    });
});