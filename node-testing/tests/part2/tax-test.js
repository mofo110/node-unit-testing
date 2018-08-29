// https://www.codementor.io/nodejs/tutorial/unit-testing-tdd-node-js-nockjs-part-2

var testData = require('./test-data');
var nock = require('nock');
var chai = require('chai');
var expect = chai.expect;
var tax = require('./../../src/part2/tax');

describe('tax.calculate()', function () {

    it('calculate() should resolve  with an object containing the tax details', function (done) {
        nock(tax.URL)
            .post(tax.BASE_PATH)
            .reply(testData.HTTP_OK, testData.TAX_REPLY);

        tax.calculate(testData.SUB_TOTAL, testData.CA_STATE, function (taxDetails) {
            expect(taxDetails).to.eql(testData.TAX_REPLY);
            done();
        });
    });

    it('calculate() should send the subtotal in the request', function (done) {
        nock(tax.URL)
            .post(tax.BASE_PATH)
            .reply(testData.HTTP_OK, function (uri, requestBody) {
                return {
                    amount: requestBody.subtotal * testData.TAX_RATE
                };
            });

        tax.calculate(testData.SUB_TOTAL, testData.CA_STATE, function (taxDetails) {
            expect(taxDetails).to.eql(testData.TAX_REPLY);
            done();
        });
    });

    it(`calculate() should not make a requesst if the state is EXEMPT ${JSON.stringify(tax.TAX_EXEMPT_STATES)}`, function (done) {
        nock(tax.URL)
            .post(tax.BASE_PATH)
            .reply(testData.HTTP_OK, function (uri, requestBody) {
                return {
                    amount: requestBody.subtotal * testData.TAX_RATE
                };
            });

        tax.calculate(testData.SUB_TOTAL, tax.TAX_EXEMPT_STATES[0], function (taxDetails) {
            expect(taxDetails).to.eql(testData.TAX_EXEMPT_REPLY);
            done();
        });
    });
});