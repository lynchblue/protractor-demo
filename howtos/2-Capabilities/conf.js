// Tests for the calculator.
exports.config = {
  seleniumServerJar: '../../node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',

  specs: [
    'spec.js', 'spec2.js'
  ],

  framework: 'jasmine2',

  capabilities: {
    'browserName': 'chrome', // 'firefox'
    'shardTestFiles': true
  }
};
