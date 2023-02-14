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

