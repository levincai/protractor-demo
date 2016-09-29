# Protractor demo

*Author: [Colby Stone](colby.stone@ibm.com)*


### Important URLs
- [Protractor API](http://www.protractortest.org/#/api) - URL to the docs for protractor.

### Important Protractor concepts

#### Select an element
```
element(by.css('someCSS'));
element(by.className('someClass'));
element(by.id('someID'));
element(by.tagName('someTag'));
```

#### Select all of a type of element
```
element.all(by.css('someCSS'));
```

#### Click an element
```
element(by.css('someCSS')).click();
```

#### Fill an input
```
element(by.css('someCSS')).sendKeys('some text');
```

#### Go to a url
```
browser.get('http://example.com/something');
```


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

### Test List

- Authentication
- About
- Button
- Form
- List

### Local Setup
1. After checking out the project, `cd <WORKSPACE_DIRECTORY>`
3. `npm install`
4. `grunt build`
4. point MAMP to the build folder


### Tasks
- `grunt build`        - Creates a build
- `grunt test-func`    - Runs tests
