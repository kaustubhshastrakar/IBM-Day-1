"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Address_1 = require("./Address");
var Person_1 = require("./Person");
var RegularEmployee_1 = require("./RegularEmployee");
var person = new Person_1.Person('John', 'Doe', 'john@email.com', new Address_1.Address('India', 'Kolkata'));
var employee = new RegularEmployee_1.RegularEmployee(10000, 'John', 'Doe');
