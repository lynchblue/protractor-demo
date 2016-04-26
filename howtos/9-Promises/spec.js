describe('slow calculator', function () {
    beforeEach(function () {
        browser.get('http://localhost:3456');
    });
    var firstElement = element(by.model('first'));
    var secondElement = element(by.model('second'));
    var result = element(by.binding('latest'));

    it('should add numbers', function () {
        firstElement.sendKeys(4);
        secondElement.sendKeys(5);

        element(by.id('gobutton')).click();

        // Why does not output the result? How could we fix it?
        console.log('The result is: ' + result.getText());

        expect(element(by.binding('latest')).getText()).toEqual('9');
    });
});

