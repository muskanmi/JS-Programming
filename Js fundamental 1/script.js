// let js = "amazing";
//         if (js == "amazing"){
//             alert("Javascript is FUN!");
//         }
//         // no where output will come. 40 + 8 + 23 - 10;
//         console.log(40 + 8 + 23 - 10);
// //external javascript code.



// //values and variable vedio
// console.log("Jonas");
// console.log(23);

// let firstName = "Jonas" // create a variable and store the value.
// console.log(firstName); 

// //data types vedio
// true;
// console.log(true);
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true);  // typeof operator for primitive data type.
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);
// let year;
// console.log(year);
// console.log(typeof year);
// year = 1991;
// console.log(year);
// console.log(typeof year);

// console.log(typeof null);   // it's a kind of bug in javascript.

// //let, const and var vedio
// let age = 30;
// age = 31;  // re assigning of age variable.

// const birthYear = 1991;
// // birthYear = 1990;  // cannot re assign the value in const.
// // const job; throws an error.

// var job = "programmer";
// job = "teacher";

// lastName = "Mittal"
// console.log(lastName); // without any also the result will come in console. 

// //basic operators vedio
// const ageJonas = 2037 - 1991;
// const ageSarah = 2037 - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// const nameJonas = "Jonas";
// const nameMittal = "Mittal";
// console.log(nameJonas + ' ' + nameMittal);
// let x = 10 + 5;  // x = 15
// x += 10;  // x = x + 10
// x++;  // x = x + 1
// //x--;
// console.log(x);

// console.log(ageJonas > ageSarah);
// console.log(ageJonas < ageSarah);
// console.log(ageSarah >= 18);

// //string and template literals vedio
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037

// const jonas = "I'm " + firstName + ', a ' + (year-birthYear) + 'years old ' + job + '!';
// console.log(jonas);

// using template literals
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
// console.log(jonasNew);
// console.log(`Just a regular string...`);
// console.log('String with \n\
// multiple \n\
// lines' );
// console.log(`String
// multiple
// lines`);

//if/else statemenst vedio
// const age = 15;
// const isOldEnough = age >= 18;

// if(isOldEnough){
//     console.log('Sarah can start driving license');
// }
// else{
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// type conversion and coercion vedio
// const inputYear = '1991';
// console.log(inputYear + 18);

// //convert the string to a number
// console.log(Number(inputYear));
// console.log(inputYear + 18); 
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));   //NaN
// console.log(typeof NaN);

// console.log(String(23), 23);

// console.log('23' - '10' - 3); // - operators trigggers the opposite conversion 
// console.log('23' + '10' + 3);
// console.log('23' * '2');

// let n = '1' + 1;
// n = n - 1;
// console.log(n); // 10

// console.log(2 + 3 + 4 + '5'); 
// console.log('10' - '4' - '3' - 2 + '5'); 

//truthy and falsy values vedio
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// if(money) {
//     console.log("Don't spend it all :)");
// }
// else{
//     console.log('You should get a job');
// }

// let height;
// if(height) {
//     console.log("YAY! height is defined");
// }
// else{
//     console.log('height is UNDEFINED');
// }

//equality operators == and === vedio
// const age = 10;
// if(age === 10){   // strict equality opeartor(does not perform type coercion)
//     console.log('You just became an adult!');
// }
// //loose equality operator  == does type coercion
// console.log('18' == 18);
// console.log('18' === 18);

// const fav = prompt("What's your favourite number?")
// console.log(fav);
// console.log(typeof fav);

// if(fav == 23) {
//     console.log('Cool! 23 is an amazing number');
// }

// if(fav === 23) { // '23' === 23
//     console.log('Cool! 23 is an amazing number');
// }

// if(fav != 23) {
//     console.log('Why not 23?');
// }

// if(fav !== 23) {
//     console.log('Why not 23?');
// }

//Boolean Logic vedio
// const hasDriversLicense = true;
// const hasGoodVision = true;
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if(shouldDrive) {
//     console.log('Sarah is able to drive!');
// }
// else{
//     console.log('Someone else should drive...');
// }

//The switch statement vedio
//  const day = 'saturday';

//  switch(day) {
//     case 'monday':
//         console.log('This is Monday!');
//         break;
//     case 'tuesday':
//         console.log('Tuesday!');
//         break;
//     case 'wednesday':
//         console.log('wednesday!');
//         break;
//     case 'thursday':
//         console.log('Thursday!');
//         break;
//     case 'friday':
//         console.log('Friday!');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Sunday!');
//         break;
//     default:
//         console.log('Not valid!');
//  }

//statements and expressions vedio
// 3 + 4
// 1991
// true && false && !false

//The conditional operator vedio
// const age = 23;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if(age >= 18){
//     drink2 = 'wine';
// }else {
//     drink2 = 'water';
// }
// console.log(drink2);

//js releases (ES5, ES6+, ESNext)