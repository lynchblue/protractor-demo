describe('slow calculator', function () {
    beforeEach(function () {
        browser.get('http://localhost:3456');
    });
    var firstElement = element(by.uiElement('first'));
    var secondElement = element(by.uiElement('second'));

    it('should add numbers', function () {
        firstElement.sendKeys(4);
        secondElement.sendKeys(5);

        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).toEqual('9');
    });
});

