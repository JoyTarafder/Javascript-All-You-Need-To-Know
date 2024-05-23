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
