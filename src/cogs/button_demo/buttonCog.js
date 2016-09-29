awf.app.registerCog("buttonCog", {
	views: {
		"medium": {
			"label": "Button World",
			"render": function ($container) {

				$container.html(protractor.templates.button_med);

				$('button').on('click', function(ev){
					$('.fillMe').attr('class', 'fillMe');
					var color = ev.target.className;
					$('.fillMe').addClass(color);
				});
			}
		},
		"large": {
			"label": "Button World",
			"render": function ($container) {
				$container.html(protractor.templates.button_lg);

				$('body').on('click', '.button_demoLG button', function(ev){
					var title = ev.target.innerHTML;
					$('h1').html(title);
				});
			}
		}

	}
});
