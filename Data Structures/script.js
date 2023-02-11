'use strict';

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];  // without array destructuring

const [x, y, z] = arr;   // with destructuring
console.log(x, y, z);
console.log(arr);


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};


const [first, second] = restaurant.categories;
console.log(first, second);   // will return first two values from categories array

const [first1, , second2] = restaurant.categories
console.log(first1, second2);  // will return first and last element from array.

// const temp = main;
// main = secondary;
// secondary = temp;  // without destructuring

// [first1, second2] = [second2, first1];  to switch the value of both first1 and second2
// console.log(first1, second2);

// console.log(restaurant.order(2, 0));
restaurant.order(2, 0);
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//nested destructuring
const nested =  [2, 4, [5, 6]];   // nested array
const [i, ,j] = nested;
console.log(i, j);

const[i2, , [j2, k]] = nested;   // will return all separate variables with nested array
console.log(i2, j2, k);

// default values
 const [p, q, r] = [8, 9];
 console.log(p, q, r);   // 8 9 undefined(not having third value)

 const [p2 = 1, q2 = 1, r2 = 1] = [8];
 console.log(p2, q2, r2);   // will return 8 1 1



 // OBJECT DESTRUCTURING

 const restaurant2 = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const {name, openingHours, categories} = restaurant2;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant2;
console.log(restaurantName, hours, tags);   // same output as previous 

const {menu = [], starterMenu: starters = [] } = restaurant2;   // starterMenu exists so the default value will not apply here.
console.log(menu, starters);

//Mutating variables
 let a2 = 111;
 let b2 = 999;
 const obj = {a2 : 23, b2: 7, c: 14};

//  {a2, b2} = obj;  // unexpected token
({ a2, b2} = obj);  // we have to wrap it inside ();
console.log(a2, b2);  // now will return 23, 7

// nested object destructuring
const {fri} = openingHours;
console.log(fri);  // will return open and close object

const {fri: {open, close}} = openingHours;
console.log(open, close); // will return 11 , 23

const {fri: {open: o, close: c2 }} = openingHours;
console.log(o, c2);  // same output will return 