// Example of generics with classes

class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {}

    get(index: number): string {
        return this.collection[index];
    }
}

class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
        return this.collection[index];
    }
}

const strArray = new ArrayOfAnything(['a', 'b', '1']); // type inference
const numArray = new ArrayOfAnything<number>([1, 2, 3, 4, 5]); // recommended

// Example of generics with functions

function printStrings(arr: string[]): void {
    for (let str of arr) {
        console.log(str);
    }
}

function printNumbers(arr: number[]) {
    for (let num of arr) {
        console.log(num);
    }
}

function printAnything<T>(arr: T[]): void {
    for (let value of arr) {
        console.log(value);
    }
}

printAnything([1, 2, 3, 4]); // type inference again
printAnything<string>(['a', 'b', 'c']); // recommended

// Generic Constraints

class Car {
    print() {
        console.log("I'm a car");
    }
}

class House {
    print() {
        console.log("I'm a house");
    }
}

interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let value of arr) {
        value.print();
    }
}

// printHousesOrCars([1, 2, 3, 4, 5]); // error
printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);

export {};
