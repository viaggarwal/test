/*global document, window, alert, console, require, browser,jasmine,
 requirePage, requireData, requireConfig, requireLibrary,
 describe, it, beforeEach, forEach, by, expect, element*/
//********** Require Pages*************//
var homePage = requirePage('homePage');
describe('TC5_NewAccount-NonEDIActive-RoleSalesRep', function () {
    beforeEach(function () {
        global.current_TestCase = 'TC5_NewAccount-NonEDIActive-RoleSalesRep';
    });
    it('TC5 - New Account - Non EDI Active - Role Sales Rep', function () {
        var accountName = "nonEDI"+global.TIMESTAMP;
        appLogger.Log("************************ TC5 Execution Started ***************************");
        appLogger.Log("************************ " + __filename + "***************************");
        homePage.openHome()
            .getNewAccountPage()
            .fillNewAccountDetails(accountName,
                global.TIMESTAMP,
                'Bay State AGT (Brockton) DM',
                'House Account',
                global.TIMESTAMP,
                global.TIMESTAMP)
                .clickSaveButton()
               .verifyCreateAccountNonEDISuccessMessage(accountName)
               .verifyPostAccountCreationDetails()
               .verifyNonEDIAccountDetails();
        homePage.openHome()
            .getCustomersPage()
            .performSearchForCustomers(global.TIMESTAMP,"Prospect")
            .verifyAccountsOfCustomer(global.TIMESTAMP,accountName);
    });
  });