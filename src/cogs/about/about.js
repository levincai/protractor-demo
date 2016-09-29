awf.app.registerCog("aboutCog", {
	views: {
		"page": {
			"label": "About World",
			"render": function ($container) {
				$container.html(protractor.templates.about);
			}
		}

	}
});
