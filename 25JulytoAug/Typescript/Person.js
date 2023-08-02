"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(firstName, lastName, email, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
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
exports.Person = Person;
