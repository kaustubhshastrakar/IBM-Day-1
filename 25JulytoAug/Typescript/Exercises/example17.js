var Training = /** @class */ (function () {
    function Training(category, title, noOfDays) {
        this.category = category;
        this.title = title;
        this.noOfDays = noOfDays;
    }
    Training.prototype.buy = function () {
        console.log('Buying this ' + this.noOfDays + ' day(s) ' + this.title + ' course from category ' + this.category);
    };
    return Training;
}());
// Constructor parameters are mapped to member variables.
// If we prefix a constructor parameter with an access modifier (ie. private),
// it will automatically be mapped for us.
// We can refer to these constructor parameters as if they were declared 
// as properties on the class, for example this.title, can be used anywhere within the Training class 
// to obtain the Training title on that instance
var BuyTraining = /** @class */ (function () {
    function BuyTraining(trainings) {
        this.trainings = trainings;
    }
    BuyTraining.prototype.buy = function () {
        var training = this.chooseTraining();
        training.buy();
    };
    BuyTraining.prototype.chooseTraining = function () {
        // Decision can come for example from the form in the browser, another webservice, db, etc
        var whichTraining = 2;
        return this.trainings[whichTraining];
    };
    return BuyTraining;
}());
var trainings = [
    new Training('Drupal', 'Drupal 8 for Developers', 2),
    new Training('Angular', 'Angular 2 Fundamentals', 3),
    new Training('Nodejs', 'Developing web applications with the MEAN stack', 5),
    new Training('SQL', 'T-SQL basics', 2),
    new Training('Management', 'BPMN for code architects', 3)
];
var choice = new BuyTraining(trainings);
choice.buy();
