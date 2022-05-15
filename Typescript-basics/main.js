"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
exports.__esModule = true;
/* let variable declaration */
var message = "hello world!!";
console.log(message);
/* Declaring type of variable */
var isBoolean = true;
console.log(isBoolean);
/* String type declaration of variable */
var name = "Prachi";
console.log(name);
/* Number type declaration of variable */
var num = 290;
/* can change the value of variables declared as let */
num = 12;
/* Tuple type variable declaration */
var tupple1 = ["Anukalp", 11];
console.log(tupple1);
/* Tupple with any type declaration, can call function like tupple[2](), or property like tupple[2].name or tupple[2].toUpperCase() with type any */
var tupple2 = [false, 34, "mike"];
/* assigning new value of integer type doesn't throw error in case of any type declaration */
tupple2[2] = 20;
console.log(tupple2);
/* Enum Type, starting index 0 by default */
var Color;
(function (Color) {
  Color[(Color["Red"] = 0)] = "Red";
  Color[(Color["Green"] = 1)] = "Green";
  Color[(Color["Yellow"] = 2)] = "Yellow";
})(Color || (Color = {}));
var color = Color.Green;
console.log(color);
/* unknown type declaration, can't call function like test(), or property like test.name or test.toUpperCase() here */
var test = "20";
/* Providing type of arguments and their specific property */
function printName(obj) {
  return typeof obj === "object" && obj.name;
}
console.log(printName(test));
console.log(printName({ name: "Naman" }));
console.log(test.toUpperCase());
/* ? represent optional argument. it might be more than one but should always come after the required arguments */
function printAvg(arg1, arg2) {
  if (arg2) return (arg1 + arg2) / 2;
  else return arg1;
}
console.log(printAvg(10, 40));
console.log(printAvg(100));
/* Passing traditionally an object as an argument */
function printFullNameWithGreeting(person) {
  return "Hello ".concat(person.firstName, " ").concat(person.lastName);
}
printFullNameWithGreeting({ firstName: "Ashish", lastName: "Goel" });
function printFullName(person) {
  return "".concat(person.firstName, " ").concat(person.lastName);
}
console.log(printFullName({ firstName: "Swati", lastName: "Sachan" }));
/* class declaration */
var Employee = /** @class */ (function () {
  function Employee(name, age) {
    this.name = name;
    this.age = age;
  }
  Employee.prototype.greet = function () {
    console.log("Hello ".concat(this.name));
  };
  Employee.prototype.getAge = function () {
    console.log("".concat(this.name, "'s age is ").concat(this.age));
  };
  return Employee;
})();
var e1 = new Employee("Manak", 22);
e1.greet();
e1.getAge();
/* Inheriting from Employee class */
var Manager = /** @class */ (function (_super) {
  __extends(Manager, _super);
  function Manager(name, age) {
    return _super.call(this, name, age) || this;
  }
  /* Own Method */
  Manager.prototype.assignWork = function () {
    console.log("assigning tasks...");
  };
  return Manager;
})(Employee);
var m1 = new Manager("Milan", 42);
m1.assignWork();
m1.getAge();
