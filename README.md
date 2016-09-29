# Protractor demo

*Author: [Colby Stone](colby.stone@ibm.com)*


### Important URLs
- [Protractor API](http://www.protractortest.org/#/api) - URL to the docs for protractor.


### Test Locations
```
  * src/ -
  	* base/
	  * __tests__/
	  	* exampleFunctional.js
    * cogs/
      * example/
        * __tests__/
          * exampleFunctional.js
```

### Local Setup
1. After checking out the project, `cd <WORKSPACE_DIRECTORY>`
2. `cd protractor-demo`
3. `npm install`
4. `grunt build`
4. `point MAMP to the build folder`


### Tasks
- `grunt build`        - Creates a build and watches for new changes
- `grunt test-func`    - Runs tests
