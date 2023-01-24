// Activating strict mode vedio
'use strict';

// let hasDriversLicense = false;
// const passTest = true; 
// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');   // has a bug and find the bug yourself.

//by using strict mode then it tells the exact error.

//const interface = 'Audio';  // interface is a keyword, it shows a error.
//const private = 534; // also not work.


// Functions vedio
// function logger(){
//     console.log('My name is Jonas');
// }
// logger(); // calling, running, invoking function
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// // console.log(fruitProcessor(54, 45));
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);


// functions declarations vs expression
// function calAge1(birthYear){
//     const age = 2037 - birthYear;
//     return age;
// }
// console.log(calAge1(1991));

// const calAge2 = function (birthYear){   // anonymous function
//     const age = 2037 - birthYear; 
//     return age;
// }
// //console.log(calAge2(1993));
// const age2 = calAge2(1991);
// console.log(age2);


// const age1 = calAge1(1991);  // first call the function and then define the function

// function calAge1(birthYear) { // definition of the function
//     return 2037 - birthYear;
// }

// Arrow functions vedio  (ES6 feature)
// const calAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const calAge3 = birthYear => 2037 - birthYear;
// console.log(calAge3(1991));

// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log((yearsUntilRetirement(1991)));

// const yearsUntilRetirement2 = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log((yearsUntilRetirement2(1991, 'Jonas')));

// functions calling other functions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

// Reviewing functions vedio

// Introduction to Arrays vedio
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length);

// friends[2] = 'Jay';
// console.log(friends);
// console.log(friends[friends.length - 1]);


// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schedeman', 2037 - 1991, 'teacher', friends];
// console.log(jonas);

//Basic Array operations vedio
// const friends = ['Michael', 'Steven', 'Peter'];
// friends.push('Jay');
// console.log(friends);

// friends.unshift('John');
// console.log(friends);

// friends.pop();
// console.log(friends);
// const popped = friends.pop();
// console.log(popped);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven')); // not found -1

// console.log(friends.includes('Steven'));  // not found false

// Introduction to Objects vedio
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Shedetaman',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }
//  console.log(jonas);

//Dot vs. Bracket notation vedio
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Shedetaman',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }
// console.log(jonas);

// console.log(jonas.firstName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// console.log(jonas.'first' + nameKey);

//challenge
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// Objects methods vedio
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Shedetaman',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: true,

    // calAge: function(birthYear) {
    //     return 2037 - birthYear
    // }

    // OR 

//     calAge: function() {
//         console.log(this);
//         return 2037 - this.birthYear
//     }
// }

// console.log(jonas.calAge(1991));
// console.log(jonas['calAge'](1991));
// console.log(jonas.calAge());   // for this.birthYear

// Iteration: for loop vedio
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

//Looping Arrays, Breaking and Continuing
// const jonasArray = [
//     'Jonas',
//     'Schedatman',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = [];

// for(let i = 0; i < 5; i++){
//     console.log(jonasArray);
//     console.log(jonasArray[1]);
// }

// for(let i = 0; i < jonasArray.length; i++){
//     console.log(jonasArray[i], typeof jonasArray[i]);


    // types[i] = typeof jonasArray[i];  OR
//     types.push(typeof jonasArray[i])
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for(let i = 0; i < years.length; i++){
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

//continue and break
// console.log('------ONLY STRING------');
// for (let i =0; i < jonasArray.length; i++){
//     if(typeof jonasArray[i] !== 'string') continue;

//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// Looping backwards and loops in loop vedio
// const jonasArray = [
//         'Jonas',
//         'Schedatman',
//         2037 - 1991,
//         'teacher',
//         ['Michael', 'Peter', 'Steven'],
//         true
//     ];

//     for(let i = jonasArray.length - 1; i >= 0; i--) {
//         console.log(i, jonasArray[i]);
//     }

//     for(let excercise = 1; excercise < 4; excercise++) {
//         console.log(`--------------------STARTING EXCERCISE ${excercise}`);

//         for(let rep = 1; rep < 6; rep++) {
//             console.log(`Lifting weight repetition ${rep}`);
//         }
//     }

// The while Loop vedio
for(let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
}

let rep = 1;
while(rep < 6) {
    console.log(`Lifting weight repetition ${rep}`);
    rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}