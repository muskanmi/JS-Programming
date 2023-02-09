'use script';

function calAge(birthYear) {
    const age = 2037 - birthYear;
    console.log(firstName);  // variable not in the function.

    function printAge() {
        const output = `${firstName}, You are ${age}, born in ${birthYear}`;  // cannot find age variable and goes to parent scope to find the age variable. same as with firstName variable.
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const str = `Oh, and you're a millenial, ${firstName}`;   // finding jonas from the outer scope!
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }
        // console.log(str);  // (reference error) because the let and const variable are block scoped.
        console.log(millenial);   // variables declared with the var keyword are function scoped.
        console.log(add(2, 3));
    }
    printAge();
    return age;
}

const firstName = 'Jonas';
console.log(calAge(1991));
// console.log(age); // reference error (age is not defined.)