// Tests for the calculator.

var SpecReporter = require('jasmine-spec-reporter'),
    Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    directConnect: true,

    specs: [
        'spec.js'
    ],

    framework: 'jasmine2',

    capabilities: {
        'browserName': 'chrome'
    },

    jasmineNodeOpts: {
        print: function () {
        }
    },

    onPrepare: function () {


        // CLI reporter
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'summary',
            displaySpecDuration: true
        }));

        // XML Reporter
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'output/xmloutput',
            filePrefix: 'xmloutput'
        }));

        // HTML with screenshots reporter
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: 'output/screenshots/',
            screenshotsFolder: 'images',
            filePrefix: 'report'
        }));
    }
};
