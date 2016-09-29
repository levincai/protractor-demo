awf.app.registerCog("formCog", {
	views: {
		"medium": {
			"label": "Form World",
			"render": function ($container, med_methods) {
				$container.html(protractor.templates.form_med);

				$('.form_demo button').on('click', function(ev){
					ev.preventDefault();
					var email = $('[name="email"]').val();
					var comments = $('[name="comments"]').val();
					if (email == '' || comments == '') {
						med_methods.postMessage('error', 'All fields are required!');
					}else{
						med_methods.postMessage('success', 'The form was submited!');
					}
				});
			}
		},
		"large": {
			"label": "Form World",
			"render": function ($container, med_methods) {
				$container.html(protractor.templates.form_lg);
				$('body').on('click', '.form_demoLG button', function(ev){
					ev.preventDefault();
					var email = $('[name="emailLG"]').val();
					var comments = $('[name="commentsLG"]').val();
					if (email == '' || comments == '') {
						med_methods.postMessage('error', 'All fields are required!');
					}else{
						med_methods.postMessage('success', 'The form was submited!');
					}
				});
			}
		}

	}
});
