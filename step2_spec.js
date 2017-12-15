// this spec.js for protractor tutorial step 2 - writing multiple scenarios
// This spec will do a number of checks

/* description of elements and behaviour to follow */

describe('Protractor Demo App', function() {
	// defining variables
	var firstNumber = element(by.model('first'));
	var secondNumber = element(by.model('second'));
	var goButton = element(by.id('gobutton'));
	var latestResult = element(by.binding('latest'));

	// defining functions
	// beforeEach is run before every it block
	beforeEach(function() {
		browser.get('http://juliemr.github.io/protractor-demo/')
	});

	// Tests
	it('should have a title', function() {
		expect(browser.getTitle()).toEqual('Super Calculator');
	});

	it('should add one and two', function() {
		firstNumber.sendKeys(1);
		secondNumber.sendKeys(2);
		goButton.click();
		expect(latestResult.getText()).toEqual('3'); //this will work
	});

	it('should add four and six', function() {
		firstNumber.sendKeys(4);
		secondNumber.sendKeys(6);
		goButton.click();
		expect(latestResult.getText()).toEqual('10');
	});

	it('should read the value from an input', function() {
		firstNumber.sendKeys(1);
		expect(firstNumber.getAttribute('value')).toEqual('1');
	});
});
