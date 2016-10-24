/**
 * Created by e002239 on 10/17/2016.
 */
var paytmPage = requirePage('paytmPage');
describe('paytmFailingSpec', function () {
    beforeEach(function () {
        global.current_TestCase = 'paytmFailingSpec';
    });
    it('paytmFailingSpec', function () {
        appLogger.Log("************************ paytmFailingSpec ***************************");
        appLogger.Log("************************ " + __filename + "***************************");
        paytmPage.failingPage();
    });
});