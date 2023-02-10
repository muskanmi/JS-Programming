 'use strict';


// console.log(this);

// const calAge = function(birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);  // will return window if not using use strict and if using then return undefined.
// }
// calAge(1991);

// const calAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this);  // will return window object. (call back function / arrow function)
// }
// calAgeArrow(1980);

// const jonas = {
//     year: 1991,
//     calAge: function() {
//         console.log(this);  // will return whole jonas object.
//         console.log(2037 - this.year);
//     }
// }
// jonas.calAge();

// const matilda = {
//     year: 2017
// };
// matilda.calAge = jonas.calAge; // copying method from jonas to matilda (method borrowing)
// matilda.calAge();

// const f = jonas.calAge;
// console.log(f);
// f(); // cannot read properties of year. (regular function not inside an object.)



const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calAge: function() {
        console.log(this);  // will return whole jonas object.
        console.log(2037 - this.year);
    },

    greet: () => {
        console.log(`Hey ${this.firstName}`);  // will return hey undefined!
        console.log(this);  // will return window object
    }
}
jonas.greet();
console.log(this.firstName);  //undefined



const jonasF = {
    firstName: 'Jonas',
    year: 1991,
    calAge: function() {
        console.log(this);  // will return whole jonas object.
        console.log(2037 - this.year);

        const isMillenial = function() {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };

        //solution 1
        // const self = this; //to preserve this keyword in isMillenial function (instead of this we can write self)
        // const isMillenial = function() {
        //     console.log(self);
        //     console.log(self.year >= 1981 && this.year <= 1996);
        // };
        // isMillenial();  // regular function call even it is inside object, therefore it is undefined.


        //solution 2
        // const isMillenial = () => {
        //     console.log(this);
        //     console.log(this.year >= 1981 && this.year <= 1996);
        // };
        // isMillenial();
    },

    greet: () => {
        console.log(`Hey ${this.firstName}`);  // will return hey undefined!
        console.log(this);  // will return window object
    }
}
jonas.greet();
jonasF.calAge();
console.log(this.firstName);  //undefined

//Arguments keyword
const addExpr = function(a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 10, 11);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
}
addArrow(2, 5, 8);  // arguments is not defined (only defined in regular function)

