console.log(23 === 23.0); // will return true

console.log(0.1 + 0.2); // will return 0.30000....4
console.log(0.1 + 0.2 === 0.3);  // will return false

// conversion
console.log(Number('23'));
console.log(+'23');

// parsing
console.log(Number.parseInt('30px', 10));  // 10 is a base here (will return 30)
console.log(Number.parseInt('e23', 10)); // will return NaN
console.log(Number.parseInt('2.5rem')); // will return 2
console.log(Number.parseFloat('  2.5rem  '));  // will return 2.5

// check if value is not a number
console.log(Number.isNaN(20)); // will return false, it is a number
console.log(Number.isNaN('20')); // will return false
console.log(Number.isNaN(+'20X')); // will return true
console.log(Number.isNaN(23 / 0));  // will return false

// checking if a value is a number and not a string
console.log(Number.isFinite(20));  // will return true
console.log(Number.isFinite('20'));  // false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23 / 0));  // false

console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0));  // true
console.log(Number.isInteger(23 / 0));  // false


// Maths and Rounding
console.log(Math.sqrt(4));
console.log(25 ** (1/2));
console.log(8 ** (1/3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.min(5, 10, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);  // calculatye area of circle with the radius

console.log(Math.random()); // will give number between 0 and 1
console.log(Math.trunc(Math.random() * 6) + 1);  // will give number between 1 and 6

const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20)); // will give numbers between min and max.

// Rounding integers
console.log(Math.trunc(23.3)); // removes any decimal part

console.log(Math.round(23.3));
console.log(Math.round(23.9)); // will round to the nearest value

console.log(Math.ceil(23.3));
console.log((Math.ceil(23.9)));

console.log(Math.trunc(-23.3));  // will return 23
console.log(Math.floor(-23.3));  // will return 24

// Rounding decimals
console.log((2.7).toFixed(0)); // will return 3
console.log((2.7).toFixed(3)); // will return 2.700
console.log((2.345).toFixed(2));  // will return 2.35
console.log(+(2.345).toFixed(2));  // will return 2.35

// Remainder operator
console.log(5 % 2);
console.log(5 / 2);
console.log(8 % 3);
console.log(8 / 3);
console.log(6 % 2);
console.log(6 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));  // is an even number true
console.log(isEven(23)); // is an odd number false
console.log(isEven(514)); // is an even number true

// Numeric separators
// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const priceCents = 345_99;
console.log(priceCents);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.14_15;
// PI = 3._1415; invalid use of underscore
console.log(PI);

console.log(Number('230000')); // will print the number
console.log(Number('23_000')); // will return NaN

// Working with BigInt
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log((2 ** 53 + 1));
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

//operations
console.log(10000n + 10000n);
const huge = 202222222222222222222222222222222222222222222n;
const num = 23;
// console.log(huge * num); will give an error cannot mix bigint with other types
console.log(20n > 15); // will return true
console.log(20n === 20); // false
console.log(typeof 20n);  // bigint
console.log(huge + ' is really big!!!!');

// Divisions
console.log(10n / 3n); // will return 3n
console.log(10 / 3);  // will return 3.33333....5

// Creating Dates
const now = new Date();
console.log(now);
console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));
console.log(new Date((0)));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // convert days to miliseconds

// working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.toISOString());

console.log(new Date(2142256980000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);