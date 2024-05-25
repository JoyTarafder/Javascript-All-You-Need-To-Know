// Data Type

// Primitive Data Types
// String
let firstName = 'Joy'; // String
console.log(firstName); // String

// Number
let age = 25; // Number
console.log(age); // Number

// Boolean
let isMarried = false; // Boolean
console.log(isMarried); // Boolean

// Undefined
let lastName; // Undefined
console.log(lastName); // Undefined

// Null
let city = null; // Null
console.log(city); // Null

// Symbol
let symbol = Symbol('symbol'); // Symbol
console.log(symbol); // Symbol

// BigInt
let bigInt = 1234567890123456789012345678901234567890n; // BigInt
console.log(bigInt); // BigInt

// Reference Data Types
// Non-Primitive Data Types
// Array
let hobbies = ['Reading', 'Coding', 'Traveling']; // Array
console.log(hobbies); // Array

// Object
let person = {
  firstName: 'Joy',
  age: 25,
  isMarried: false,
}; // Object
console.log(person); // Object

// Function
let greet = function () {
  return 'Hello World!';
}; // Function
console.log(greet); // Function

// Date
let today = new Date(); // Date
console.log(today); // Date


// ******************* Number *******************
let number = 25; // integer
let number1 = 25.36; // Float
let number2 = 25e3; // 25000
let number3 = 25e-3; // 0.025
let number4 = Number('25'); // 25
console.log(Number.parseInt(number1)); // 25
console.log(Number.parseFloat(number1)); // 25

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity

console.log(1/0); // Infinity

// ******************* String *******************
let str = 'Hello World!';
let str1 = "Hello World!";
let str2 = `Hello World!`;

let str3 = new String('Hello World!');
let str4 = new String(555);
let str5 = new String(145.25);
console.log(str3);

console.log(str.length); // 12
console.log(str.charAt(0)); // H
console.log(str.charCodeAt(0)); // 72
console.log(str[0]); // H
console.log(str.concat(' Good Morning!')); // Hello World! Good Morning!
console.log(str.includes('Hello')); // true
console.log(str.indexOf('World')); // 6
console.log(str.lastIndexOf('o')); // 7
console.log(str.match(/World/g)); // [ 'World' ]
console.log(str.replace('World', 'Bangladesh')); // Hello Bangladesh!
console.log(str.search('World')); // 6
console.log(str.slice(6, 11)); // World
console.log(str.split(' ')); // [ 'Hello', 'World!' ]
console.log(str.startsWith('Hello')); // true
console.log(str.endsWith('World!')); // true
console.log(str.substr(6, 5)); // World
console.log(str.substring(6, 11)); // World
console.log(str.toLowerCase()); // hello world!
console.log(str.toUpperCase()); // HELLO WORLD!
console.log(str.trim()); // Hello World!
console.log(str.valueOf()); // Hello World!

// ******************* Boolean *******************
let isTrue = true;
let isFalse = false;
let isTrue1 = new Boolean(true);
let isFalse1 = new Boolean(false);
console.log(isTrue1);// [Boolean: true]
console.log(isTrue1.valueOf());// true

// ******************* Undefined *******************
let name;
console.log(name); // undefined

// ******************* Null *******************
let city2 = null;
console.log(city2); // null

// ******************* Hexadecimal & Octal  *******************

let hex = 0xff; // Hexadecimal
console.log(hex); // 255

let oct = 0o377; // Octal
console.log(oct); // 255
