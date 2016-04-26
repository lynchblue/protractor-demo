describe('slow calculator', function () {
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get('http://example.org/');
    });

    it('should have two paragraph elements', function () {
        var paragraphElements = element.all(by.tagName('p'));

        expect(paragraphElements.count()).toEqual(2);
    });

    it('should have two paragraph elements', function () {
        var h1Element = element(by.tagName('h1'));

        expect(h1Element.getText()).toEqual('Example Domain');
    });
});
