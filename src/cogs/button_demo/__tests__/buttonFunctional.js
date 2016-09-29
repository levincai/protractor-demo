describe('Button World', function() {

	beforeEach(function() {
		browser.get('http://localhost:8888/protractor-demo/build');
	});

	describe('Medium Card', function() {

		it('should change the color of the box to the appropriate color when a button is clicked', function() {

			var buttons= element.all(by.css('.button_demo button'));

			buttons.each(function(elm, index) {
				elm.click();
				var fill = element(by.css('.fillMe')).getAttribute('class');
				expect(fill).toContain(elm.getText());
			});

		});
	});


	describe('Large Card', function() {

		beforeEach(function() {
			element(by.css('.js-card[aria-label="Button World Card"] .js-card-titlebar')).click();
		});

		afterEach(function() {
			element(by.css('.js-large-card-close')).click();
		});

		var buttons= element.all(by.css('.button_demoLG button'));

		it('should change the heading text when a button is clicked', function() {

			var matches = buttons.map(function(elm, index) {
				elm.click();
				return {
					index,
					button: elm.getText(),
					heading: element(by.css('.button_demoLG h1')).getText()
				}
			});

			expect(matches).toEqual([
			  {index: 0, button: 'yourIBM', heading: 'yourIBM'},
			  {index: 1, button: 'Think', heading: 'Think'},
			  {index: 2, button: 'yourCompany', heading: 'yourCompany'}
			]);
		});

	});
});
