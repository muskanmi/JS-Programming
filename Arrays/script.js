'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.slice(2);
// console.log(arr); this will return whole string.
console.log(arr.slice(2)); // this will return new array.
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
// shallow copy using slice()
console.log(arr.slice());
console.log([...arr]); // using spread operator also

//splice() {it does change the original array}
console.log(arr.splice(2)); // will return c, d, e
console.log(arr);  // will return a, b
console.log(arr.splice(-1));
console.log(arr);

// reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2); // will also reverse the original array

// Concat()
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//Join()
console.log(letters.join('-'));

// At()
const arr3 = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));  // ES2022 method

// for finding last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log('jonas'.at(0));
console.log(('jonas'.at(-1)));


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for(const move of movements) {
    // console.log(move);
    if(move > 0){
        console.log(`You deposited ${move}`);
    } else {
        console.log(`You withdrew ${Math.abs(move)}`);
    }
}

console.log('----FOREACH----');
movements.forEach(function(movement) {
    if(movement > 0){
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
});  // 0: function(200) 1: function(450)  2: function(400) ..........


for(const [i, move] of movements.entries()) {
    // console.log(move);
    if(move > 0){
        console.log(`Movement ${i+1}: You deposited ${move}`);
    } else {
        console.log(`Movement ${i+1}: You withdrew ${Math.abs(move)}`);
    }
}

console.log('----FOREACH----');
movements.forEach(function(movement, index, array) {
    if(movement > 0){
        console.log(`Movement ${index+1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${index+1}: You withdrew ${Math.abs(movement)}`);
    }
});  


// forEach() with maps and sets
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);
currencies.forEach(function(curVal, key, map) {
    console.log(`${key}: ${curVal}`);
})

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, key, map) {
    console.log(`${key}:  ${value}`);  // key is exactly same as the values.
})