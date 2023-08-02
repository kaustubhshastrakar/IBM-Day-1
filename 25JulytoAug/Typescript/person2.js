var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());
var Person = /** @class */ (function () {
    function Person(_firstName, _lastName, _email) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.email = _email;
    }
    Object.defineProperty(Person.prototype, "_firstName", {
        get: function () {
            return this.firstName;
        },
        set: function (_firstName) {
            this.firstName = _firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "_lastName", {
        get: function () {
            return this.lastName;
        },
        set: function (_lastName) {
            this.lastName = _lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "_email", {
        get: function () {
            return this.email;
        },
        set: function (_email) {
            this.email = _email;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person('John', 'Doe', 'john2email.com');
person._firstName = 'Moriarty';
console.log(person._firstName);
