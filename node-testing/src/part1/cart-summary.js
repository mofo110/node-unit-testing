var tax = require('./tax');

function CartSummary(items) {
    this._items = items;
}

CartSummary.prototype.getSubTotal = function () {
    if (this._items.length) {
        return this._items.reduce(function (subTotal, item) {
            return subTotal += (item.quantity * item.price);
        }, 0);
    }

    return 0;
};

CartSummary.prototype.getTax = function (state, done) {
    tax.calculate(this.getSubTotal(), state, function (taxInfo) {
        done(taxInfo.amount);
    });
};

module.exports = CartSummary;