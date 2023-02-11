const arr = [1, 2, ...[3, 4]]; // spread operator syntax

// rest operator syntax (left side of = operator)
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);   // [1, 2, [3, 4, 5]]


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
    },

    orderPizza: function(mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    }
};

const [pizza, , risotto, ...otherFood] = [...restaurant2.mainMenu, ...restaurant2.starterMenu]
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant2.openingHours;
console.log(weekdays);  // will contain only thu and fri in output

// Functions
const add = function(...numbers) {   // rest arguments
    // console.log(numbers);
    let sum = 0;
    for(let i = 0; i<numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
}
add(2, 3);
add(5, 3, 7, 2);
const x = [23, 5, 7];
add(...x);

restaurant2.orderPizza('mushrooms', 'oninion', 'olives', 'spinach');  // mushrooms is alone and other ing are in one array.
restaurant2.orderPizza('mushrooms'); // otherIng will be empty array.