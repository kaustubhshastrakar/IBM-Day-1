var FranchiseeAccountancyTool = /** @class */ (function () {
    function FranchiseeAccountancyTool(accToolKey, taxRate) {
        this.accToolKey = accToolKey;
        this.taxRate = taxRate;
    }
    Object.defineProperty(FranchiseeAccountancyTool.prototype, "invoice", {
        get: function () {
            return this._invoice;
        },
        set: function (inv) {
            this._invoice = inv;
        },
        enumerable: false,
        configurable: true
    });
    return FranchiseeAccountancyTool;
}());
var consultancyInv = { id: 'INV_20_12072015', clientId: 234 };
var accToolInstance = new FranchiseeAccountancyTool('cnaj837tjdhsu, accToolInstance.invoice = consultancyInv);
