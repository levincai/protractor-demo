describe('About Page', function(){

	beforeEach(function() {
		browser.get('http://localhost:8888/protractor-demo/build');
		element(by.css('.vertical-nav__item[title="About"]')).click();
	});

	it('should have a title "About"', function(){
		var heading = element(by.tagName('h2')).getText();
		expect(heading).toEqual("About");
	});

	it('should got to the API docs on link click', function(){
		var link = element(by.className('docs'));
		link.click();
		expect(browser.getCurrentUrl()).toEqual("http://www.protractortest.org/#/api");
	});

});
