describe('slow calculator', function () {
    beforeEach(function () {
        browser.get('http://localhost:3456');
    });

    it('should add numbers', function () {
        element(by.model('first')).sendKeys(4);
        element(by.model('second')).sendKeys(5);

        element(by.id('gobutton')).click();
        // Uncomment following line to debug
        //browser.pause();

        expect(element(by.binding('latest')).getText()).toEqual('9');
    });
});
