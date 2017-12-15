// this spec.js for protractor tutorial step 4 - lists of multiple elements
// This spec will do a number of operations, and then check that they are in
// the history.

/* description of elements and behaviour to follow:
- by.repeater finds elements inside an "ng-repeat" element - ng-repeat is an angular
	command that repeats a HTML element once per item in a data collection. Hence
	by.repeater will find each element that has that ng-repeat directive, and return
	all findings to element.all as an array of WebElements.
- WebElement is the object representing the found or located html element.
- element.all returns an ElementArrayFinder. */

describe('Protractor Demo App', function() {
	// defining variables
	var firstNumber = element(by.model('first'));
	var secondNumber = element(by.model('second'));
	var goButton = element(by.id('gobutton'));
	var latestResult = element(by.binding('latest'));
	var history = element.all(by.repeater('result in memory'));

	/* so what has happened above? by.repeater has searched for an element with
	an ng-repeat attribute called "result in memory" and returned an object
	representing every element that it finds. This object resolves to an array of
	web elements in element.all. Finally, that array is assigned to the var
	history */

	// defining functions
	// beforeEach is run before every it block
	// add adds two numbers together and clicks the go button

	function add(a, b) {
		firstNumber.sendKeys(a);
		secondNumber.sendKeys(b);
		goButton.click();
	}

	beforeEach(function() {
		browser.get('http://juliemr.github.io/protractor-demo/')
	});

	// Tests
	it('should have a history', function() {
		add(1, 2);
		add(3, 4);
		expect(history.last().getText()).toContain('1 + 2');
		expect(history.first().getText()).toContain('foo'); //this is wrong
	});
});
