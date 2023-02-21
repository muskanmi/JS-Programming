// closures in javascript

'use strict';

const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}  
const booker = secureBooking();
booker();  // will return 1 passsengers
booker();  // will return 2 passengers
booker();  // will return 3 passengers
 

//Example
let f;
const g = function() {
    const a = 23;
    f = function() {  // f is not declared here but defined here.
        console.log(a * 2);
    };
};
g();
f();
// console.dir(f);


const h = function() {
    const b = 777;
    f= function() {
        console.log(b * 2);
    };
};
h();
f();
// console.dir(f); to see the scopes.

//Example 2
const boardPassengers = function(n, wait) {
    const preGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${preGroup} passengers`);  // the variables are defined in outer function and not in setTimeOut();
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
}
// const preGroup=  1000;  example of scope chain
boardPassengers(180, 3);

//example of setTimeOut()-
setTimeout(function() {
    console.log('Timer');  // will display after 2 seconds
}, 2000);