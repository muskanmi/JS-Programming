'use strict';

// default parameters

const bookings = [];
const createBooking = function(flightnum, numPassengers = 1, price = 199) {
    const booking = {
        flightnum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');  // {flighnum: 'LH123', numPassengers: 1, price: 199
createBooking('LH123', 2, 800);
createBooking('LH123', 2);

// functions accepting callback functions

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// higher-order functions
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);   // will return Javascript is the best
    console.log(`Transformed string: ${fn(str)}`);  // will return JAVASCRIPT is the best

    console.log(`Transformed by: ${fn.name}`);   //will return upperFirstWord
}
transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best', oneWord);   // will return javascriptisthebest (passing the callback functions)

// Function returning functions

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}
const greeter = greet('Hey');
greeter('Jonas'); // will return Hey Jonas
greeter('Steven');  // will return Hey Steven
greet('Hey')('Muskan');  // will return Hey Muskan

// Challenge to convert above function to callback function

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Muskan');  // will return Hi Muskan.


// The call and apply methods-

const luftgansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum},`, name})
    },
};
luftgansa.book(239, 'Jonas Schedatman');
luftgansa.book(635, 'John Smith');
console.log(luftgansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};
const book = luftgansa.book;
// book(23, 'Sarah');  // error because it is a regular function call
book.call(eurowings, 23, 'Sarah');   // using call method
console.log(eurowings);

book.call(luftgansa, 239, 'Mary Cooper');  // using call method
console.log(luftgansa);

const swiss = {
    airline: 'Swiss Air lines',
    iataCode: 'LX',
    bookings: [],
}
book.call(swiss, 583, 'Muskan Mittal')
console.log(swiss);


// Apply Method-
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);  // in modern js always use call method (for array we can write using spread operator)
console.log(swiss);

// Bind method-
// book.call(eurowings, 23, 'Sarah');

const bookEW = book.bind(eurowings);
bookEW(23, 'Steven');  // will return Steven booked a seat
const bookLH = book.bind(luftgansa);
const bookLX = book.bind(swiss);

const bookEW23 = book.bind(eurowings, 23);  // if we pass the flightNum then only remaining is name.
bookEW23('Jonas Schedatman');
bookEW23('Marhtha Cooper');

// with event listeners use bind method
luftgansa.planes = 300;
luftgansa.buyPlane =  function() {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
luftgansa.buyPlane();

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23)  // addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));


// immediately invoked function expression
const runOnce = function() {
    console.log('This will run again');
}
runOnce();

(function() {
    console.log('This will never run again');
})  // did not executed yet.4

//IIFE
(function() {
    console.log('This will never run again');
})();

(() => console.log('This will also never run again.'))
();   // another way of writing 