//  (||)use ANY data type, return ANY data type, short-circuiting
// short-circuit means if the first value is a truthy value it will immediately return that first value. 

console.log(3 || 'Jonas');  // will  return 3(truthy value)
console.log('' || 'Jonas');  // Jonas ('' is a falsy value)
console.log(true || 0);  // true
console.log(undefined || null);  // null(undefined is a falsy value)

console.log(undefined || 0 || '' || 'Hello' || 23 || null);



const restaurant = {
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

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// const guests2 = restaurant.numGuests || 10; // restaurant.numGuest is falsy value and does not defined.
// console.log(guests2);


// AND operator
console.log(0 && 'Jonas');   // 0 (&& will evaluate both value)
console.log(7 && 'Jonas');   // the last value is returned (if all the operands are true)
console.log(7 && '');  // will return ''
console.log('Hello' && 23 && null && 'jonas'); // when it finds one falsy value then the whole expression will become false.

// practical example
if(restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');   // mushrooms and ['spinach']
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')  // will return mushrooms and ['spinach']


// Nullish coalescing operator (??)

restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10; // restaurant.numGuest is falsy value and does not defined.
console.log(guests2);  // will return 10

// Nullish: null and undefined (NOT 0 or '')
const guests = restaurant.numGuests ?? 10;   // in case of ?? operator when the restaurant.numGuests is null or undefined then only second operand will executed
console.log(guests);  // will return 0 


// Logical Assignment Operators

const rest1 = {
    name: 'Capri',
    numGuests: 20,
};
const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};
// rest2.numGuests = rest1.numGuests || 10;
// console.log(rest2);

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
console.log(rest1);  // will return whole object of rest1
console.log(rest2);  // will have numGuests = 10;

rest1.numGuests ||= 10; // more concise way
rest2.numGuests ||= 10; // more concise way


// logical nullish assignment operator
rest1.numGuests ??= 10;  // in case of numGuests is 0 then it will return 0
rest2.numGuests ??= 10;  // in case of not having numGuests so this will be null or undefined and will return 10

rest2.owner = rest2.owner && '<ANONYMOUS>';
console.log(rest2);  // will have anonymous in owner.


// The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) {
    console.log(item);
}

for(const item of menu.entries()) {
    console.log(item);
    console.log(`${item[0] + 1}: ${item[1]}`);
}

for(const [i, el] of menu.entries()) {
    // console.log(item);
    console.log(`${i + 1}: ${el}`);
}
console.log(menu.entries());

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days) {
    console.log(day);
}

const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty');  // will return Jonas

const user = [];
console.log(user[0]?.name ?? 'User array empty!');

if(user.length > 0){
    console.log(user[0].name);
} else{
    console.log('user array empty!');
}  

// Looping Objects: keys, values, entries
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHoursT =  {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0,
        close: 24,
    },
}

const properties = Object.keys(openingHoursT);
console.log(properties);  // will return array of thu fri and sat

console.log(`We are open on ${properties.length} days`);

for(const day of Object.keys(openingHoursT)) {
    console.log(day);  // will return thu fri sat
}

const values = Object.values(openingHoursT);
console.log(values); // will return values

const entries = Object.entries(openingHoursT);
console.log(entries); // will return all

for(const x of entries) {
    console.log(x);
}