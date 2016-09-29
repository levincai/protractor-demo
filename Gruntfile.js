module.exports = function (grunt) {

	var path = require('path'),
	config = require('load-grunt-config')(grunt, {
		config: {
			app: grunt.file.readJSON('config.json'),
			pkg: grunt.file.readJSON('package.json'),
			jasmine: {
				pivotal: {
					src: 'build/mail_at_ibm.js',
					options: {
						specs: 'spec/unit/**/*Spec.js',
						vendor: [
							'build/venders/awf/awf.js',
							'build/venders/awf/w3-feature-pack.js'
						]
					}
				}
			},
			protractor: {
    			options: {
      				configFile: "grunt/protractor.js",
      				keepAlive: true,
      				noColor: false
    			}
  			},
		},
		configPath: path.join(process.cwd(), 'grunt'),
		init: false
	});

	/*	Load Tasks
	------------------------------------------*/
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-protractor-runner');

	/*	Grunt Tasks
	------------------------------------------*/
	grunt.registerTask('default', [
		'build'
	]);


	grunt.registerTask('build', "Generate .js", [
		'clean:build',
		'webpack:mail_at_ibm',
		'copy:static',
		'notify:build_complete'
	]);

	grunt.registerTask('test', [
		'build',
		'copy:unitTests',
		'copy:funcTests',
		'jasmine',
		'protractor',
		'clean:test'
	]);

	grunt.registerTask('test-unit', [
		'build',
		'copy:unitTests',
		'jasmine',
		'clean:test'
	]);

	grunt.registerTask('test-func', [
		'build',
		'copy:funcTests',
		'protractor',
		'clean:test'
	]);

	/*	Init Config
	------------------------------------------*/
	grunt.initConfig(config);

};
