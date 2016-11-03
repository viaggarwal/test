/**
 * Created by e002239 on 10/17/2016.
 */
var paytmPage = requirePage('paytmPage');
describe('paytmDuplicatePage', function () {
    beforeEach(function () {
        global.current_TestCase = 'paytmDuplicatePage';
    });
    it('paytmDuplicatePage', function () {
        appLogger.Log("************************ paytmDuplicatePage ***************************");
        appLogger.Log("************************ " + __filename + "***************************");
        paytmPage.failingPage();
    });

    it('paytmDuplicatePage', function () {
        appLogger.Log("************************ paytmDuplicatePage ***************************");
        appLogger.Log("************************ " + __filename + "***************************");
        paytmPage.failingPage();
    });
});