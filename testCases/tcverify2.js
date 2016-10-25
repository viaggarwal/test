/*...*/
var googleSearchPage = requirePage('googleSearchPage');
describe('TC002', function () {
	beforeEach(function () {
        global.current_TestCase = 'TC002';
    });
	it('TC002#1st spec', function () {
		console.log('1st spec');
		googleSearchPage.performGoogleSearch();
		expect(true).toBe(true);
	});
	it('TC002#2nd spec', function () {
		console.log('2nd spec');
		expect(true).toBe(true);
	});
});

