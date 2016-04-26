// Tests for the calculator.
exports.config = {
    directConnect:true,

    specs: [
        'spec.js'
    ],

    framework: 'jasmine2',

    capabilities: {
        'browserName': 'chrome'
    },

    onPrepare: function () {

        // Add custom Locator to find data-co-uitest-element
        var findUiElement = function (elementName, parentElement) {
            parentElement = parentElement || document;
            return parentElement.querySelectorAll('[data-co-uitest-element="' + elementName + '"]');
        };

        by.addLocator('uiElement', findUiElement);

    }
};
