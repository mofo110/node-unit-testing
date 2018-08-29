const SUB_TOTAL = 50;
const TAX_RATE = 0.10;

module.exports = {
    HTTP_OK: 200,
    TAX_REPLY: {
        amount: SUB_TOTAL * TAX_RATE
    },
    TAX_EXEMPT_REPLY: {
        amount: 0
    },
    SUB_TOTAL: SUB_TOTAL,
    TAX_RATE: TAX_RATE,
    CA_STATE: 'CA'
};