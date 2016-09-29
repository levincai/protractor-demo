
exports.config = {


	framework: 'jasmine',

	onPrepare: function(){
		browser.ignoreSynchronization = true;
		browser.manage().timeouts().implicitlyWait(10000);
	},
	resultJsonOutputFile: 'reports/report',

	seleniumAddress: 'http://localhost:4444/wd/hub',

	specs: [ '../spec/functional/**/*Functional.js' ],

	plugins: [{
        chromeA11YDevTools: {
          treatWarningsAsFailures: false
        },
        package: 'protractor-accessibility-plugin'
      }]

};
