"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carMakers = ['ford', 'toyota', 'chevy'];
var dates = [new Date(), new Date()];
// Two dimensional array
var carsByMake = [['f150'], ['corolla'], ['camaro']];
// Help with inference when extracting values
var car = carMakers[0];
var myCar = carMakers.pop();
// Prevent incompatible values
// carMakers.push(100);
// Help with 'map'
carMakers.map(function (car) { return car.toUpperCase(); });
// Flexible types
var importantDates = [new Date(), '2030-10-10'];
importantDates.push('2022-08-24');
importantDates.push(new Date());
