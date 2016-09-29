awf.app.registerCog("listCog", {
	views: {
		"medium": {
			"label": "List World",
			"render": function ($container) {
				$container.html(protractor.templates.list_med);

				$('.addAnother').on('click', function(){
					var count = $('.list li').length;
					$('.list').append('<li>' + (count + 1) + '</li>');
				});

				$('.removeOne').on('click', function(){
					$('.list li:last').remove();
				});
			}
		},
		"large": {
			"label": "List World",
			"render": function ($container) {
				$container.html(protractor.templates.list_lg);

				$('body').on('click', '.addAnother', function(){
					var count = $('.listLG li').length;
					$('.listLG').append('<li>' + (count + 1) + '</li>');
				});

				$('body').on('click', '.removeOne', function(){
					$('.listLG li:last').remove();
				});
			}
		}

	}
});
