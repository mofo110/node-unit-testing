// https://www.codementor.io/davidtang/unit-testing-and-tdd-in-node-js-part-1-8t714s877

var testData = require('./test-data');
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

var CartSummary = require('./../../src/part1/cart-summary');
var tax = require('./../../src/part1/tax');

describe('CartSummary.getTax()', function () {
    beforeEach(function () {
        sinon.stub(tax, 'calculate').callsFake(function (subtotal, state, done) {
            setTimeout(function () {
                done({
                    amount: testData.CA_TAX
                });
            }, testData.DELAY); // Delay in ms.
        });
    });

    afterEach(function () {
        tax.calculate.restore();
    });

    it(`getTax() should execute the callback function with the tax amount after a delay of ${testData.DELAY}ms`, function (done) {
        var cartSummary = new CartSummary(testData.ITEMS);

        cartSummary.getTax(testData.CA_STATE, function (taxAmount) {
            expect(taxAmount).to.equal(testData.CA_TAX);
            expect(tax.calculate.getCall(0).args[0]).to.equal(testData.SUB_TOTAL);
            expect(tax.calculate.getCall(0).args[1]).to.equal(testData.CA_STATE);
            done();
        });
    });
});