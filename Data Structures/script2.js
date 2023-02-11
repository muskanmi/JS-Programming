const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];  // if wants to add 1 and 2 at starting of the array.
console.log(badNewArr);

// using spread operator
const newArr = [1, 2, ...arr];
console.log(newArr); 
console.log(...newArr); // will return individually element of an array.

const restaurant2 = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    }
};
const newMenu = [...restaurant2.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant2.mainMenu];  // easier syntax to copy the array into another array
console.log(mainMenuCopy);

//Join 2 arrays
const menu = [...restaurant2.starterMenu, ...restaurant2.mainMenu];
console.log(menu);

// Iterables are arrays, string, maps, sets. NOT objects.
const str = 'Jonas';
const letters = [...str, '', 'S.'];  // each character of string is unpacked ['J', 'o', 'n', 'a', 's', '', 'S.']
console.log(letters);
console.log(...str);   // j o n a s
// console.log(`${...str} Schmedtamn`); will not work in template literals.


// const ingredients = [
//     prompt("Let's make pasta! Ingredient 1?"),
//     prompt('Ingredient 2?'),
//     prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant2.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant2.orderPasta(...ingredients);  // better solution

// Objects
const newRestaurant = {FoundingYear: 1998, ...restaurant2, founder: 'Guiseppe'};
console.log(newRestaurant); 

const restaurant2Copy = {...restaurant2};
restaurant2Copy.name = 'Ristorante Rona';
console.log(restaurant2Copy);   // will change name
console.log(restaurant2.name); // will not change name
