'use strict';

// map in javascript

const rest = new Map();  // to create an empty map.
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy')
console.log(rest.set(2, 'Lisbon, Portugal'));
// console.log(rest); 

rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(');
// console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

//Example
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));   // if true then it will return value of true key!

console.log(rest.has('categories'));   // will return true.
rest.delete(2);
// console.log(rest);
console.log(rest.size);

rest.set([1,2], 'Test');  // Array becomes new key in map
console.log(rest);
console.log(rest.get([1, 2]));  // will return undefined.

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));  // now, will return (Test)

// we can pass the values in map initially instead of set method
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again']
]);
console.log(question);

// Map iterables
// quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
    if(typeof key === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
}

//convert map to array
console.log(...question);
console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());