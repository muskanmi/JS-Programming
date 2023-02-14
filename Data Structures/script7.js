'use strict';

// working with the Strings

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);  // will return A
console.log(plane[1]);  // will return 3
console.log(plane[2]);  // will return 2
console.log('B737'[0]); // will return B    

console.log(airline.length);  // will return 16
console.log('B737'.length);   // will return 4

console.log(airline.indexOf('r'));  
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));   // will return TAP
console.log(airline.slice(airline.lastIndexOf(' ')));  // will return Portugal
console.log(airline.slice(-2));  // will return al

console.log(airline.slice(1, -1));

//Example
const checkMiddleSeat = function(seat) {
    // B and E are middle seats
    const s = seat.slice(-1);
    if(s === 'B' || s === 'E'){
        console.log('You got the middle seat!');
    } else{
        console.log('You got lucky!');
    }
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));  // will return object
console.log(typeof new String('jonas').slice(1));  // will return string

// to lower and upper case string
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//replacing
const priceGB = '288,97$';
const priceUS = priceGB.replace("$", "#");
console.log(priceUS);

//booleans
const plane2 = 'A320neo';
console.log(plane.includes('A320'));

if(plane2.startsWith('A3') && plane2.endsWith('neo')) {
    console.log('Part of the NEW ARirbus family');
}

//split method of string
console.log('a+very+nice_string'.split('+'));
console.log('Jonas Schmedtman'.split(' '));
const [firstName, lastName] = 'Jonas Schmedtman'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');  // join('-----') anything we can pass
console.log(newName);

const capitalizeName = function(name) {
    const names = name.split(' ');
    const namesUpper = [];

    for(const word of names) {
        // namesUpper.push(word[0].toUpperCase() + word.slice(1));
        // OR
        namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
}
capitalizeName('jessica and smith davis');  // will return Jessica And Smith Davis.

// Padding
const message = 'Go to gate 23!'
console.log(message.padStart(25, '+').padEnd(5, '+'));  // will append 25 + sign before the string
console.log('Jonas'.padStart(25, '+'));
console.log('Jonas'.padEnd(25, '+'));


//Example
const maskCreditCard = function(number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}
console.log(maskCreditCard(64637836));

// Repeat
const message2 = 'Bad weather...All Departures Delayed...';
console.log(message2.repeat(5));  // will repeat message2 5 times.

const planesInLine = function(n) {
    console.log(`There are ${n} planes in line`);
}
planesInLine(5);
planesInLine(3);
planesInLine(12);