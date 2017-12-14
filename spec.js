// spec.js for protractor
// This spec will check for titles of webpages

describe('This webpage', function() {
	it('should have a title', function() {
		browser.get('https://docs.angularjs.org/api/', 20000);
		expect(browser.getTitle()).toEqual('AngularJS: API: API Reference');
	});
});
