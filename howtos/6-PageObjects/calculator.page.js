var CalculatorPage = function () {

    var firstAddend = element(by.model('first'));
    var secondAddend = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var result = element(by.binding('latest'));

    this.addNumbers = function (firstNumber, secondNumber) {
        firstAddend.sendKeys(firstNumber);
        secondAddend.sendKeys(secondNumber);
        goButton.click();
    };

    this.checkResultIs = function (resultNumber) {
        expect(result.getText()).toBe(resultNumber)
    }
};

module.exports = CalculatorPage;

