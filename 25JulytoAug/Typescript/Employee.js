"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, department) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Employee.prototype.getDetails = function () {
        return 'first name: ' + this.firstName + ' last name: ' + this.lastName;
    };
    return Employee;
}());
exports.Employee = Employee;
