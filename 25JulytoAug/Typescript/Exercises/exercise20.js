var CartItem = /** @class */ (function () {
    function CartItem(productId, name, price, quantity) {
        this.productId = productId;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    CartItem.prototype.getTotalPrice = function () {
        return this.price * this.quantity;
    };
    return CartItem;
}());
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = [];
    }
    ShoppingCart.prototype.addItem = function (item) {
        var existingItemIndex = -1;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].productId === item.productId) {
                existingItemIndex = i;
                break;
            }
        }
        if (existingItemIndex !== -1) {
            this.items[existingItemIndex].quantity += item.quantity;
        }
        else {
            this.items.push(item);
        }
    };
    ShoppingCart.prototype.removeItem = function (productId) {
        this.items = this.items.filter(function (item) { return item.productId !== productId; });
    };
    ShoppingCart.prototype.getTotalPrice = function () {
        var totalPrice = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            totalPrice += item.getTotalPrice();
        }
        return totalPrice;
    };
    return ShoppingCart;
}());
var item1 = new CartItem("12345", "Pen", 10, 2);
var item2 = new CartItem("67890", "Pencil", 5, 3);
var cart = new ShoppingCart();
cart.addItem(item1);
cart.addItem(item2);
console.log("Cart Total Price: ", cart.getTotalPrice());
