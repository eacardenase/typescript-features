"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apples = 5;
var speed = 'fast';
var hasName = false;
var nothingMuch = null;
var nothing = undefined;
// built in objects
var now = new Date();
// Array
var colors = ['red', 'green', 'blue'];
var numbers = [1, 2, 3, 5, 6];
var truths = [true, false, true];
// Classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// Object Literal
var point = {
    x: 10,
    y: 20,
};
// Function
function logNumber(i) {
    console.log(i);
}
var logIdentity = function (i) {
    console.log(i);
};
// When to use annotations
// 1) Function that returns the 'any' type
var json = '{"x": 10, "y": 20}';
var coordinates = JSON.parse(json);
// 2) When we declare a variable on one line
// and initialize it later
var words = ['red', 'green', 'blue'];
var foundWord;
words.forEach(function (color) {
    if (color === 'green') {
        foundWord = true;
    }
});
// 3) Variable whose type cannot be inferred correctly
var numbersArray = [-10, -1, 12];
var numberAboveZero = false;
numbersArray.forEach(function (number) {
    if (number > 0) {
        numberAboveZero = number;
    }
});
