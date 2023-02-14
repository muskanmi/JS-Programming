///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// const test = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function() {
    const test = document.querySelector('textarea').value;
    // console.log(test);
    const rows= test.split('\n');
    // console.log(rows);

    for(const row of rows) {
        const [first, second] = row.toLowerCase().trim().split('_');
        // console.log(row, first, second);
        const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
        console.log(output);
    }
});





// 2 challenge

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


  // 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// console.log(flights.split('+'));  // will contain 4 values in array

for(const flight of flights.split('+')) {
    // console.log(flight);
    // console.log(flight.split(';'));
    const [type, from, to, time] = flight.split(';'); 
    // console.log(type, from, to, time);
    const output = `${type.replaceAll('_', ' ')} from ${from.slice(0, 3).toUpperCase()} to ${to.slice(0,3).toUpperCase()} (${time.replace(':', 'h')})`;
    console.log(output);
}

