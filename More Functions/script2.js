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