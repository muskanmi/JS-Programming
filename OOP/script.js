'use strict'

const Person = function(firstName, birthYear) {
    // console.log(this);
    this.firstName = firstName;
    this.birthYear = birthYear;
}

// new Person('Jonas', 1991);
const jonas = new Person('Jonas', 1991);
console.log(jonas);

//1. New {} is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {}