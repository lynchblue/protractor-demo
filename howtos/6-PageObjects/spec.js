var CalculatorPage = require('./calculator.page')

describe('slow calculator', function () {
    beforeEach(function () {
        browser.get('http://localhost:3456');
    });

    it('should add numbers', function () {
        var calculatorPage = new CalculatorPage();

        calculatorPage.addNumbers(4, 5);
        calculatorPage.checkResultIs('9');
    });
});
