var request = require('request');
const URL = 'https://some-tax-service.com';
const BASE_PATH = '/request';
const TAX_EXEMPT_STATES = ['AL', 'FL', 'NV', 'SD', 'TX', 'WA', 'WY'];

module.exports = {
    calculate: function (subtotal, state, done) {
        if (TAX_EXEMPT_STATES.indexOf(state) > -1) {
            return done({ amount: 0 });
        }

        request.post({
            url: `${URL}${BASE_PATH}`,
            method: 'POST',
            json: { subtotal: subtotal }
        }, function (error, response, body) {
            done(body);
        });
    },
    TAX_EXEMPT_STATES: TAX_EXEMPT_STATES,
    URL: URL,
    BASE_PATH: BASE_PATH
};