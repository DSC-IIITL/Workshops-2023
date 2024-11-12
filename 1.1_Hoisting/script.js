// Example 1: Hoisting with `var`
console.log("Value of `hoistedVar` before declaration:", hoistedVar); 
var hoistedVar = "I am a hoisted variable";
console.log("Value of `hoistedVar` after declaration:", hoistedVar); 

// // Example 2: Hoisting with `let` and `const`
// console.log("Value of `hoistedLet` before declaration:", hoistedLet);
// let hoistedLet = "I am a block-scoped variable (let)";

// console.log("Value of `hoistedConst` before declaration:", hoistedConst);
// const hoistedConst = "I am a block-scoped variable (const)";

// // Example 3: Hoisting with functions
// console.log("Calling `hoistedFunction` before declaration:");
// hoistedFunction();

// function hoistedFunction() {
//   console.log("I am a hoisted function!");
//}

// // Example 4: Hoisting with function expressions
// var hoistedFunctionExpression = function () {
//     console.log("I am a function expression, and I am not hoisted!");
// };
// console.log("Calling `hoistedFunctionExpression` before declaration:");
// hoistedFunctionExpression();



/*
Expected Output:
1. Start of script
2. Value of `hoistedVar` before declaration: undefined
3. Value of `hoistedVar` after declaration: I am a hoisted variable
4. Error: hoistedLet is not defined
5. Error: hoistedConst is not defined
6. Calling `hoistedFunction` before declaration:
7. I am a hoisted function!
8. Error: hoistedFunctionExpression is not a function
10. End of script

Explanation:
- Accessing `hoistedLet` or `hoistedConst` before declaration results in a `ReferenceError`.
- `var` variables are hoisted as `undefined`.
- Function declarations are fully hoisted and can be called before their definition.
- Function expressions are not hoisted and cannot be called before assignment.
*/
