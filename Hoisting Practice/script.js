// console.log(me);  // var will return undefined in hoisting
// console.log(job);   // reference error (temporal dead zone)
// console.log(year);  // same error cannot access before initialization

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));   // cannot access before initialization
// console.log(addArrow(2, 3));  // cannot access before initialization

function addDecl(a, b){
    return a + b;
}
const addExpr = function(a, b) {
    return a + b;
}

var addExprr = function(a, b) {  // addExprr is not a function
    return a + b;
}

const addArrow = (a, b) => a + b;

//Example
//bug
if(!numProducts) deleteShoppingCart();  //!10 means undefined and thats why hoisting workd.

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x == window.x);
console.log(y == window.y);
console.log(z == window.z);