"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary: function () {
        return "\n        Name: ".concat(this.name, "\n        Year: ").concat(this.year, "\n        Broken? ").concat(this.broken);
    },
};
var drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary: function () {
        return "My drink has ".concat(this.sugar, " grams of sugar.");
    },
};
var printSummary = function (item) {
    console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink);
