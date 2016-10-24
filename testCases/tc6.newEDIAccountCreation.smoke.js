/*global document, window, alert, console, require, browser,jasmine,
 requirePage, requireData, requireConfig, requireLibrary,
 describe, it, beforeEach, forEach, by, expect, element*/
//********** Require Pages*************//
var homePage = requirePage('homePage');
describe('TC6_NewAccount-EDIActive-RoleSalesRep', function () {
    beforeEach(function () {
        global.current_TestCase = 'TC6_NewAccount-EDIActive-RoleSalesRep';
    });
   it('TC6 - New Account - EDI Active - Role Sales Rep', function () {
        var accountName = "EDI"+global.TIMESTAMP;
        appLogger.Log("************************ TC6 Execution Started ***************************");
        appLogger.Log("************************ " + __filename + "***************************");
        homePage.openHome()
            .getNewAccountPage()
            .fillNewAccountDetails(accountName,
                global.TIMESTAMP,
                    'Berkshire TGP DM',
                    'House Account',
                (global.TIMESTAMP+''+global.TIMESTAMP).substring(0,13),
                    global.TIMESTAMP.substring(0,6))
            .clickSaveButton()
            .verifyCreateAccountEDISuccessMessage(accountName)
            .verifyPostAccountCreationDetails()
            .verifyEDIAccountDetails(global.TIMESTAMP)
            .verifyAccountsOfCustomer(global.TIMESTAMP,accountName);
       homePage.openHome()
           .getCustomersPage()
           .performSearchForCustomers(global.TIMESTAMP,"Prospect")
           .verifyAccountsOfCustomer(global.TIMESTAMP,accountName);
    });
});