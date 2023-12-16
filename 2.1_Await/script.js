// async and await

const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();

  return data;
};

console.log(1);
console.log(2);

getTodos().then((data) => {
  console.log("resolved", data);
});

console.log(3);
console.log(4);
