// Without optional chaining
const person = {
    name: "John",
    address: {
      city: "New York",
    },
  };
  
  // Checking each level for existence
  const city = person.address && person.address.city;
  console.log(city);  // Outputs: New York
  

 // With optional chaining, the code becomes more concise:
  // With optional chaining
//const person = {
  //  name: "John",
    //address: {
      //city: "New York",
    //},
  //};
  
  // Using optional chaining
  //const city = person.address?.city;
  //console.log(city);  // Outputs: New York


  //You can use optional chaining not only for object properties but also for function calls:
  //const person = {
    //getName: function() {
      //return "John";
    //},
  //};
  
  // Using optional chaining with a function call
  //const name = person.getName?.();
  //console.log(name);  // Outputs: John
  