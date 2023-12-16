//Ternary Operator
const age = 25;

// Using the ternary operator to assign a value based on a condition
const message = age >= 18 ? "You are an adult" : "You are a minor";

console.log(message); // Outputs: You are an adult

//nullish coalescing operator ??

// Without nullish coalescing operator
//let variable = null;

//let result = (variable !== null && variable !== undefined) ? variable : "default value";
//console.log(result);  // Outputs: default value

//With the nullish coalescing operator:
// With nullish coalescing operator
//let variable = null;

//let result = variable ?? "default value";
//console.log(result);  // Outputs: default value

//difference between the nullish coalescing operator and the logical OR operator (||):
const defaultValue = "default value";
let variable1 = null;
let variable2 = "";

let result1 = variable1 ?? defaultValue;
let result2 = variable2 || defaultValue;

console.log(result1); // Outputs: default value
console.log(result2); // Outputs: default value
