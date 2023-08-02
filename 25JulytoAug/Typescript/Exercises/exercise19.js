var WarehouseLocation = /** @class */ (function () {
    function WarehouseLocation() {
        this.stockItem = null;
    }
    WarehouseLocation.prototype.getStockItem = function () {
        return this.stockItem;
    };
    WarehouseLocation.prototype.setStockItem = function (item) {
        this.stockItem = item;
    };
    return WarehouseLocation;
}());
var newStockItem = {
    name: "Pencil",
    quantity: 100,
};
var newWarehouseLocation = new WarehouseLocation();
newWarehouseLocation.setStockItem(newStockItem);
var retrievedStockItem = newWarehouseLocation.getStockItem();
if (retrievedStockItem) {
    console.log("Retrieved Stock Item: ", retrievedStockItem);
}
else {
    console.log("No stock item found at this location.");
}
