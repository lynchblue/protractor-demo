// Tests for the calculator.
exports.config = {
    seleniumServerJar: '../../node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',

    specs: [
        'spec.js'
    ],

    framework: 'jasmine2',

    multiCapabilities: [
        {
            'browserName': 'chrome'
        },
        {
            'browserName': 'firefox'
        }
    ]
};
