// https://www.codementor.io/davidtang/unit-testing-and-tdd-in-node-js-part-1-8t714s877

var testData = require('./test-data');
var chai = require('chai');
var expect = chai.expect;

var CartSummary = require('./../../src/part1/cart-summary');

describe('CartSummary.getSubTotal()', function () {
    it('getSubTotal() should return 0 if no items are passed in', function () {
        var cartSummary = new CartSummary([]);
        expect(cartSummary.getSubTotal()).to.equal(0);
    });

    it('getSubTotal() should return the sum of price * quantity for all items', function () {
        var cartSummary = new CartSummary(testData.ITEMS);

        expect(cartSummary.getSubTotal()).to.equal(testData.SUB_TOTAL);
    })
});