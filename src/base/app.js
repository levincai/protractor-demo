require('./experiences');

// App compose
awf.app.compose({
	id: "protractor",
	feature_toggles: {
		url: "flags.json",
		blocking: true
	},
	user: {
		"odw_authentication": {
		   "blocking": false,
		   "experience_blocking": true,
		   "fail_to_anonymous": true,
		   "auth_check": {
			   "endpoint": "https://w3-workplace.ibm.com/workplace/services/w3cookie/"
		   },
		   "login": {
			   "endpoint": "https://w3-workplace.ibm.com/w3login.html"
		   }
	   },
	   "odw_info": {
		   "service": {
			   "blocking": false,
			   "experience_blocking": true,
			   "fail_to_unknown": true,
			   "endpoint": "https://w3-workplace.ibm.com/w3restsvc/user/1.0.0/",
			   "appid": "6127839ee7627460c4189e36fc6b1b01"
		   }
	   },
	   "unified_profile_info": {
		   "service": {
			   "blocking": false,
			   "experience_blocking": true,
			   "fail_to_unknown": true,
			   "endpoint": "//prdpcpwbluetap01.w3-969.ibm.com/myw3/unified-profile/v1/docs/instances/master"
		   }
	   },
	   "bluegroups": {
		   "service": {
			   "blocking": false,
			   "experience_blocking": true,
			   "fail_to_unknown": true,
			   "endpoint": "//{{host}}/proxy/BpHttpApisv3/slaphapi?ibmperson/mail={{email}}.list/byjson?ibm-allgroups"
		   }
	   },
	   "identity_manager": {
		   "hostname": "prdpcrdw3n01.w3-969.ibm.com",
		   "cookie": "PD-W3-SSO-ID",
		   "path": "/myw3/awf/sso/v1/ssotoken"
	   }
   },
	page: {
		name: "Demo",
		masthead: {
			logo: "images/logo.png",
			background: "#FCFCFC"
		},
		leftnav: true,
		footer: false
	},
	app: {
		starting_experience: "homeExperience",
		leftnav: {
			default_order: ['homeExperience', 'aboutExperience']
		},
		masthead_trays: [
			'sitelinks'
		]
	}
});

// App start
awf.app.start()
	.done(function () {

	})
	.fail(function (er) {
		console.error(er);
	});
