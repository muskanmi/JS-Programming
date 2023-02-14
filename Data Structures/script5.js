'use strict';
// Sets in javascript

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'pizza']);
console.log(ordersSet);
console.log(new Set('Jonas'));

// set size
console.log(ordersSet.size);
//check if this value exists in set?
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
//add items
ordersSet.add('Garlic Bread');
console.log(ordersSet);
//delete items
ordersSet.delete('Pasta');
console.log(ordersSet);
//clear all set
// ordersSet.clear();
console.log(ordersSet);

for(const order of ordersSet) {
    console.log(order);
}

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
const unique = [...new Set(staff)]  // converted back to an array
console.log(unique);
console.log(staffUnique);  // will return unique staff array values

console.log(new Set('muskanmittal').size);