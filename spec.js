// spec.js for protractor
// This spec will check for titles of webpages

describe('Protector Demo App', function() {
	it('should have a title', function() {
		browser.get('http://www.example.com/'');
		expect(browser.getTitle()).toEqual('Example Domain');
	});
});
