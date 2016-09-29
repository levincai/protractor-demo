describe('Form World', function() {

	beforeEach(function() {
		browser.get('http://localhost:8888/protractor-demo/build');

	});

	describe('Medium Card', function() {

		var email = element(by.css('input[name="email"]')),
			comments = element(by.css('textarea[name="comments"]')),
			submit = element(by.css('button[type="submit"]')),
			error = element(by.css('.awf-message--error')),
			success = element(by.css('.awf-message--success')),
			checkbox = element(by.css('#agree'));

		it('should allow input', function() {
			checkEmailInput(email);
		});

		it('should not allow more than 140 characters in the comments', function(){
			checkTextAreaMax(comments);
		});

		it('should select the checkbox when clicked', function() {
			checkCheckbox(checkbox);
		});

		it('should throw an error if all fields are not filled', function() {
			checkErrors(submit, error);
		});

		it('should have success if valid', function() {
			checkValid(email, comments, submit, success);
		});

	});

	describe('Large Card', function() {

		var email = element(by.css('input[name="emailLG"]')),
			comments = element(by.css('textarea[name="commentsLG"]')),
			submit = element(by.css('button.submitLG')),
			error = element(by.css('.js-modal-inner .awf-message--error')),
			success = element(by.css('.js-modal-inner .awf-message--success')),
			checkbox = element(by.css('#agreeLG'));

		beforeEach(function() {
			element(by.css('.js-card[aria-label="Form World Card"] .js-card-titlebar')).click();
		});

		it('should allow input', function() {
			checkEmailInput(email);
		});

		it('should not allow more than 140 characters in the comments', function(){
			checkTextAreaMax(comments);
		});

		it('should throw an error if all fields are not filled', function() {
			checkErrors(submit, error);
		});

		it('should have success if valid', function() {
			checkValid(email, comments, submit, success);
		});
	});

	function checkEmailInput(email) {
		email.sendKeys('colby.stone@ibm.com');
		expect(email.getAttribute('value')).toEqual('colby.stone@ibm.com');
	}

	function checkTextAreaMax(comments) {
		comments.sendKeys('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
		expect(comments.getAttribute('value')).toEqual('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini');
	}

	function checkCheckbox(checkbox) {
		expect(checkbox.isSelected()).toBe(false);
		checkbox.click();
		expect(checkbox.isSelected()).toBe(true);
	}

	function checkErrors(submit, error) {
		submit.click();
		expect(error.getText()).toEqual('All fields are required!');
	}

	function checkValid(email, comments, submit, success) {
		email.sendKeys('colby.stone@ibm.com');
		comments.sendKeys('This is a test.');
		submit.click();
		expect(success.getText()).toEqual('The form was submited!');
	}

});
