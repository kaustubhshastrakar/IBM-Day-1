class CartWithTrainings {
	private trainings: Training[] = [];

	static maxTraining: number = 10;

	constructor(public cartId: string) {
	}

	addTraining(training: Training) {
		if (this.trainings.length >= CartWithTrainings.maxTraining) {
			throw new Error('To many courses in your Cart.');
		}
		this.trainings.push(training);
	}
}


var coursesCart = new CartWithTrainings('Cart1');


var nameCart = coursesCart.cartId;


coursesCart.addTraining(new Training('GIT', 'Git for Users', 1));


var maxTrainings = CartWithTrainings.maxTraining;