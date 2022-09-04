let apples: number = 5;
let speed: string = 'fast';
let hasName = false;
let nothingMuch = null;
let nothing = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3, 5, 6];
let truths: boolean[] = [true, false, true];

// Classes
class Car {}

let car: Car = new Car();

// Object Literal
let point: {
    x: number;
    y: number;
} = {
    x: 10,
    y: 20,
};

// Function
function logNumber(i: number): void {
    console.log(i);
}

const logIdentity: (i: number) => void = (i: number) => {
    console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates: {
    x: number;
    y: number;
} = JSON.parse(json);

// 2) When we declare a variable on one line
// and initialize it later

let words = ['red', 'green', 'blue'];

let foundWord: boolean;

words.forEach((color) => {
    if (color === 'green') {
        foundWord = true;
    }
});

// 3) Variable whose type cannot be inferred correctly
let numbersArray = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

numbersArray.forEach((number) => {
    if (number > 0) {
        numberAboveZero = number;
    }
});

export {};
