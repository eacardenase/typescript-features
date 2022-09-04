const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// Two dimensional array
const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car: string) => car.toUpperCase());

// Flexible types
const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];
importantDates.push('2022-08-24');
importantDates.push(new Date());

// importantDates.push(100);

export {};
