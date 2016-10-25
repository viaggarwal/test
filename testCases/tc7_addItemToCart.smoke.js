/*global document, window, alert, console, require, browser,jasmine,
 requirePage, requireData, requireConfig, requireLibrary,
 describe, it, beforeEach, forEach, by, expect, element*/
//********** Require Pages*************//
var paytmAddToCart = requirePage('paytmPage');
describe('TC7_AddItemTocart', function () {
    beforeEach(function () {
        global.current_TestCase = 'TC7_AddItemTocart';
    });
    it('AddItemTocart', function () {
      // appLogger.Log("************************ TC7_AddItemTocart ***************************");
       appLogger.Log("************************ " + __filename + "***************************");
        paytmAddToCart.paytmLogin();

        //paytmAddToCart.paytmAddToCart();
    });
});