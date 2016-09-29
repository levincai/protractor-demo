describe('Authentication', function() {

	beforeEach(function() {
		browser.get('http://localhost:8888/protractor-demo/build');
	});

	it('should allow a user to sign in', function() {
		// Click on sign in
		element(by.css('.js-signin')).click();

		// Expect to be on the sign in Page
		expect(browser.getCurrentUrl()).toContain('https://w3-workplace.ibm.com/w3login.html');

		// Get the user email input and password
		var username = element(by.id('Intranet_ID'));
		var password = element(by.id('password'));

		/* Fill in with your email...
			not sure how we want to give it a valid email
			without exposeing it maybe leave dummy data
			and fill in to test same with password to follow */
		username.sendKeys('youremail@ibm.com');
		password.sendKeys('password');

		// Click on submit button
		element(by.css('[name="ibm-submit"]')).click();

		// Expect to be back on the demo and be signed in
		expect(browser.getCurrentUrl()).toContain('protractor-demo');
		expect(element(by.css('.js-authenticated-dropdown')).isPresent()).toBe(true);

	});
});
