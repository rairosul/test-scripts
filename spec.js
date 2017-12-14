// spec.js for protractor tutorial step 1 - interacting with elements
// This spec will check for titles of webpages

/* 'element' is a global function which takes a Locator and returns an ElementFinder.
ElementFinder has a set of action methods such as click(), getText() and sendKeys.
Use these methods to interact with an element and get information back from it.
'by' finds elements in angular apps by locator. by has a set of functions to find elements
in different situations. */

/*element finds HTML elements on your webpage. It returns an ElementFinder object.
The ElementFinder object can be used to interact with the element or get information
from it. Here, sendKeys 'types' values into input elements named 'first' and 'second'.
click then clicks a button with that specific id. getText returns the text value of the
supplied element. by.binding finds an element by PARTIAL match, so any elements
bound to variables containing the string 'Latest' are returned. This doesn't happen
in this case, but it returns an element of class="ng-binding" - why? */

describe('Protractor Demo', function() {
	it('should add one and two', function() {
		browser.get('http://juliemr.github.io/protractor-demo/');
		element(by.model('first')).sendKeys(1);
		element(by.model('second')).sendKeys(2);
		element(by.id('gobutton')).click();
		expect(element(by.binding('latest')).getText()).toEqual('3'); //this will work
	});
});
