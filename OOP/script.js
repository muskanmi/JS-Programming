'use strict'

const Person = function(firstName, birthYear) {
    // console.log(this);
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // this.calcAge = function(){
    //     console.log(2037 - this.birthYear);
    // }
}

// new Person('Jonas', 1991);
const jonas = new Person('Jonas', 1991);
console.log(jonas);

//1. New {} is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {}

const matilda = new Person('Matilda', 1992);
console.log(matilda);
// using an operator
console.log(jonas instanceof Person); // will return true
const jay = "Jay";
console.log(jay instanceof Person);  // will return false

// Prototypes 
// each and every function in javascript automatically has a property called prototype that includes constructor functions.
console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}

jonas.calcAge();
matilda.calcAge();