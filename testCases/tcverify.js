/*...*/
var googleSearchPage = requirePage('googleSearchPage');
describe('TC001', function () {
	beforeEach(function () {
        global.current_TestCase = 'TC001';
    });
	it('TC001#1st spec', function () {
		console.log('1st spec');
		googleSearchPage.performGoogleSearch();
		expect(true).toBe(false);
		// browser.get('https://www.google.com');
	});
	it('TC001#2nd spec', function () {
		console.log('#########2nd spec');
		expect(true).toBe(true);
	});
});

