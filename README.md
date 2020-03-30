 Karma-BrowserStack Example
=========

Sample for using karma-browserstack-launcher to run Karma tests (QUnit framework) on BrowserStack infrastructure.
One test is failing on purpose as a demo of BrowserStack catching bugs in different browsers.

### Prerequisites
Node and npm

### Clone this repository
`git clone https://github.com/browserstack/karma-browserstack-example.git`

### Install dependencies

Navigate to appropriate directory for testing and then install the dependencies by running

`npm install`

### BrowserStack Configuration

Export the environment variables for the username and access key of your BrowserStack account.
These can be found on the automate accounts page on [BrowserStack](https://www.browserstack.com/accounts/automate).

`export BROWSERSTACK_USERNAME=<browserstack-username>`

`export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>`

You can further customize configuration in karma.conf.js. For detailed reference, visit karma-browserstack-launcher github repository [here](https://github.com/browserstack/karma-browserstack-launcher).

#### Run the tests

Execute the following command to run the karma tests:

`npm test`

###Note
- IE 6 and 7 Tests on Karma version 0.13 may fail(output - browser not captured).
- Use Karmav0.12 or below and add `transports: ['websocket','jsonp-polling']` to the karma.conf.js file
- Checkout [karma issue] for more details.

[dashboard]:https://www.browserstack.com/automate
[karma issue]:https://github.com/karma-runner/karma/issues/983
