# Karma-BrowserStack Example

Sample for using karma-browserstack-launcher to run [Karma](https://karma-runner.github.io) tests ([QUnit framework](https://qunitjs.com/)) on BrowserStack infrastructure.

_Note: One test is failing on purpose as a demo of BrowserStack catching bugs in different browsers._

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

## Clone the repository

Clone the repository in your development machine:

```sh
git clone https://github.com/browserstack/karma-browserstack-example.git
```

## Install the dependencies

Navigate to the appropriate directory for testing and then install the dependencies:

```sh
cd karma-browserstack-example
npm install
```

## Add BrowserStack configurations

Export the environment variables for the Username and Access Key of your BrowserStack account.
These can be found on the [Automate Accounts page on BrowserStack](https://www.browserstack.com/accounts/automate) or on the [Automate Dashboard](https://automate.browserstack.com/dashboard).

```sh
export BROWSERSTACK_USERNAME=<browserstack-username>
export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
```

You can further customize configuration in _karma.conf.js_. For detailed reference, [visit karma-browserstack-launcher repository on GitHub](https://github.com/browserstack/karma-browserstack-launcher).

## Run the tests

Execute the following command to run the Karma tests:

```sh
npm test
```

## Note

* IE 6 and 7 Tests on Karma v0.13 may fail (output - browser not captured).
* Use Karma v0.12 or below and add `transports: ['websocket','jsonp-polling']` to the _karma.conf.js_ file.
* [Checkout this Karma issue for more details.](https://github.com/karma-runner/karma/issues/983)

[dashboard]:https://www.browserstack.com/automate
[karma issue]:https://github.com/karma-runner/karma/issues/983
