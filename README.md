 Karma-BrowserStack Example
=========

Sample for using karma-browserstack-launcher to run Karma tests (QUnit framework) on BrowserStack infrastructure.
One test is failing on purpose as a demo of BrowserStack catching bugs in different browsers.

###Clone this repository
- `git clone https://github.com/browserstack/karma-browserstack-example.git`

###Install karma-browserstack-launcher
- `npm -g install karma-browserstack-launcher`

###Configuring the json
 - Open `karma.conf.js`
 - Replace `username` and `key` with your BrowserStack credentials. Don't have one? Get one on BrowserStack [dashboard]
 - You can further customize configuration in karma.conf.js. For detailed reference, visit karma-browserstack-launcher github repository [here].

###Sample test
 - To run: `karma start`

###Note
 - IE 6 and 7 Tests on Karma version 0.13 may fail(output - browser not captured).
 - Use Karmav0.12 or below and add `transports: ['websocket','jsonp-polling']` to the karma.conf.js file
 - Checkout [karma issue] for more details.

[here]:https://github.com/browserstack/karma-browserstack-launcher
[dashboard]:https://www.browserstack.com/automate
[karma issue]:https://github.com/karma-runner/karma/issues/983
