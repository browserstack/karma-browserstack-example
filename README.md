 Karma-BrowserStack-launcher code sample
=========

Sample for using karma-browserstack-launcher to run Karma tests (QUnit framework) on BrowserStack infrastructure.

###Clone this repository
- `git clone https://github.com/nidhimj22/karma-browserstack-launcher-sample.git`

###Install karma-browserstack-launcher
*Starting and pre-requite: [browserstack-runner]*
- `npm -g install karma-browserstack-launcher`

###Configuring the json
 - Open `browserstack.json`
 - Add `username` and `key` with your BrowserStack credentials. Don't have one? Get one on BrowserStack [dashboard]
 - You can further customize configuration in browserstack.json. For detailed reference, visit browserstack-runner github repository [here].

###Sample test
 - To run: `browserstack-runner`

[here]:http://github.com/browserstack/browserstack-runner
[nightwatch]:http://nightwatchjs.org/guide
[capabilities]:http://www.browserstack.com/automate/capabilities
[dashboard]:https://www.browserstack.com/automate