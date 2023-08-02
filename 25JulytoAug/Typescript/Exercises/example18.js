var CartWithTrainings = /** @class */ (function () {
    function CartWithTrainings(cartId) {
        this.cartId = cartId;
        this.trainings = [];
    }
    CartWithTrainings.prototype.addTraining = function (training) {
        if (this.trainings.length >= CartWithTrainings.maxTraining) {
            throw new Error('To many courses in your Cart.');
        }
        this.trainings.push(training);
    };
    CartWithTrainings.maxTraining = 10;
    return CartWithTrainings;
}());
var coursesCart = new CartWithTrainings('Cart1');
var nameCart = coursesCart.cartId;
coursesCart.addTraining(new Training('GIT', 'Git for Users', 1));
var maxTrainings = CartWithTrainings.maxTraining;
