'use strict';

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);  // both different

// const me = {
//     name: 'Jonas',
//     age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend); // age = 27
// console.log('Me', me);  // also age =  27

// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);  // both different

// const jessica = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage: ', jessica);  // lastName = 'Davis'
// console.log('After marriage: ', marriedJessica);  // lastName = 'Davis'

// marriedJessica = {}; //allowed with let keyword but not const keyword!

//copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
};
const jessicaCopy = Object.assign({}, jessica2);  // new object (created in heap)
jessicaCopy.lastName = 'Davis';
console.log('Before marriage: ', jessica2);  // lastName = 'Williams'
console.log('After marriage: ', jessicaCopy);  // lastName = 'Davis'

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log(jessicaCopy);
console.log(jessica2);   // both objects will have 4 members (jessica2 and jessicaCopy)