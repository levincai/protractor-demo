var protractor = {},
$ = awf.$, _ = awf._;

window.protractor = protractor;
// module.exports = mail_at_ibm;

protractor.VERSION = _.template('{{major}}.{{minor}}.{{patch}}')(require('./version.json'));

protractor.templates = {
	button_med: require('./cogs/button_demo/templates/medium.html'),
	form_med: require('./cogs/form_demo/templates/medium.html'),
	list_med: require('./cogs/list_demo/templates/medium.html'),
	button_lg: require('./cogs/button_demo/templates/large.html'),
	form_lg: require('./cogs/form_demo/templates/large.html'),
	list_lg: require('./cogs/list_demo/templates/large.html'),
	about: require('./cogs/about/templates/about.html')
};

require('./protractor.scss');
require('./cogs/button_demo/buttonCog.js');
require('./cogs/form_demo/formCog.js');
require('./cogs/list_demo/listCog.js');
require('./cogs/about/about.js');
require('./base/app.js');
