describe('Lists', function() {

	beforeEach(function() {
		browser.get('http://localhost:8888/protractor-demo/build');
	});

	describe('Medium Card', function() {

		var list = element.all(by.css('.list li'));

		it('should start with 3 items in the list', function() {
			expect(list.count()).toEqual(3);
		});

		describe('addAnother()', function() {
			var addAnother = element(by.css('.addAnother'));

			it('should add another item to the list when clicked', function() {
				expect(list.count()).toEqual(3);
				addAnother.click();
				expect(list.count()).toEqual(4);
			});
		});

		describe('removeOne()', function() {
			var removeOne = element(by.css('.removeOne'));

			it('should remove an item from the list when clicked', function() {
				expect(list.count()).toEqual(3);
				removeOne.click();
				expect(list.count()).toEqual(2);
			});
		});

	});
});
