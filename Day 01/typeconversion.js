let str = '5000';
let num = 10;

console.log(str + num); // '500010' not 5010 because of type conversion from number to string and then concatenation of two strings '5000' and '10' is '500010' 
console.log(str * num); // 50000 because of type conversion from string to number and then multiplication of two numbers 5000 and 10 is 50000 

console.log(Number(str) + num); // 5010 because of type conversion from string to number and then addition of two numbers 5000 and 10 is 5010   

console.log(num.toString()); // '10' because of type conversion from number to string

// Falsey values in JavaScript
// 0, -0, null, undefined, NaN, false, ''   // Empty string
// Truthy values in JavaScript
// Everything else is truthy in JavaScript

console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)); // false
console.log(Boolean('')); // false
console.log(Boolean(' ')); // true
console.log(Boolean('0')); // true
console.log(Boolean('false')); // true

let x = true;
console.log(x.toString()); // 'true' because of type conversion from boolean to string

