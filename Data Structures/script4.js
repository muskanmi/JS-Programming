//  (||)use ANY data type, return ANY data type, short-circuiting
// short-circuit means if the first value is a truthy value it will immediately return that first value. 

console.log(3 || 'Jonas');  // will  return 3(truthy value)
console.log('' || 'Jonas');  // Jonas ('' is a falsy value)
console.log(true || 0);  // true
console.log(undefined || null);  // null(undefined is a falsy value)