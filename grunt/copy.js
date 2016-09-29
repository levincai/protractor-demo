module.exports = {

	static: {
		expand: true,
		cwd: '<%= app.source_dir %>/static/',
		src: ['**'],
		dest: '<%= app.build_dir %>',
		filter: 'isFile'
	},
	unitTests: {
        files: [{
            expand: true,
            src: '<%= app.source_dir %>/**/__tests__/**/*Spec.js',
            dest: 'spec/unit/',
            rename: function(dest, src) {
                /**
                 * Example:
                 * `src/component/__tests__/exampleSpec.js` becomes...
                 * `test/unit/specs/component/exampleSpec.js`
                 */
                var filenameArr = src.split('/');
                var indexOfTests = filenameArr.indexOf('__tests__');

                filenameArr.splice(indexOfTests, 1);
                filenameArr.splice(0, 1); // remove src/
                return dest + '/' + filenameArr.join('/');
            }
        }]
    },
	funcTests: {
        files: [{
            expand: true,
            src: '<%= app.source_dir %>/**/__tests__/**/*Functional.js',
            dest: 'spec/functional/',
            rename: function(dest, src) {
                /**
                 * Example:
                 * `src/component/__tests__/exampleSpec.js` becomes...
                 * `test/unit/specs/component/exampleSpec.js`
                 */
                var filenameArr = src.split('/');
                var indexOfTests = filenameArr.indexOf('__tests__');

                filenameArr.splice(indexOfTests, 1);
                filenameArr.splice(0, 1); // remove src/
                return dest + '/' + filenameArr.join('/');
            }
        }]
    }

};
