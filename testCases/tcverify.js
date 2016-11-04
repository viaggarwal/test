/*...*/
var googleSearchPage = requirePage('googleSearchPage');
var CSV_Processor = require('../library/CSV_Processor');
var using = require('jasmine-data-provider');
var locator = require('../library/Locator');

describe('TC002', function () {
	beforeEach(function () {
		global.current_TestCase = 'TC001';
	});

	it('TC002#1st spec', function () {
			console.log(locatorCss());
			// console.log('FirstName:::', row.FirstName);
		});

	/*global.csvProcessor.completeData('TC001').map(function(row){
		it('TC002#1st spec', function () {
			console.log('TestName:::', row.TestName);
			// console.log('FirstName:::', row.FirstName);
		});
		it('TC002#1st spec', function () {
			// console.log('TestName:::', row.TestName);
			console.log('FirstName:::', row.FirstName);
		});
		it('TC002#1st spec', function () {
			console.log('LastName:::', row.LastName);
			// console.log('FirstName:::', row.FirstName);
		});
	});*/
	/*using(global.TC002Data,function(dataSet){
		it('TC001#2nd spec', function () {
			console.log('testName::',dataSet.TestName);
			console.log('firstName::',dataSet.FirstName);
			console.log('lastName::',dataSet.LastName);
		});
	});*/
});

