// spec.js for protractor
// This spec will check for titles of webpages

describe('Protector Demo App', function() {
	it('should have a title', function() {
		browser.get('http://www.ibm.com/uk-en/', 20000);
		expect(browser.getTitle()).toEqual('IBM  - United Kingdom');
	});
});
