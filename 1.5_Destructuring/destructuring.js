// Array Destructuring
// const numbers = [1, 2, 3];

// const [a, b, c] = numbers;

// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3

// Object Destructuring
// const person = { name: 'John', age: 30, city: 'New York' };
// const { name, age, city } = person;

// console.log(name); // 'John'
// console.log(age);  // 30
// console.log(city); // 'New York'

// Additional properties

// 1. Default Values
// const array = [1, 2];
// const [p, q, r = 3] = array;
// console.log(r); // 3

// 2.Rest Syntax

// Array Example
// const array1 = [1, 2, 3, 4, 5];
// const [first, second, ...rest] = array1;
// console.log(rest); // [3, 4, 5]

// Object Example
// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York',
//     job: 'Software Engineer'
//   };
//   const { name, age, ...restInfo } = person;
  
//   console.log(name);      // 'John'
//   console.log(age);       // 30
//   console.log(restInfo);  // { city: 'New York', job: 'Software Engineer' }


// 3. Nested Destructuring

// const data = {
//   user: 'John',
//   details: {
//     age: 25,
//     city: 'London'
//   }
// };
// const { user, details: { age } } = data;

// console.log(user); // 'John'
// console.log(age);  // 25


// 4. Parameter Destructuring

// Object destructuring in function parameters
function printPerson({ name, age, city }) {
    console.log(`${name} is ${age} years old and lives in ${city}.`);
}
  
const person = { name: 'Alice', age: 25, city: 'Paris' };
printPerson(person);    // Output: "Alice is 25 years old and lives in Paris."
  

  






