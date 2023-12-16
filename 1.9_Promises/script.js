const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
        // Change data to request.responseText to get the data in non-JSON format
      } else if (request.readyState === 4) {
        reject("Couldn't fetch data");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getTodos("todos/marvel.json")
  .then((data) => {
    console.log("promise resolved", data);
  })
  .catch((err) => {
    console.log(err);
  });

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // fetch something
//     resolve("some data")
//     // reject("some error");
//   });
// };

// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// Chaining Promises

// getTodos("todos/marvel.json")
//   .then((data) => {
//     console.log("promise resolved", data);
//     return getTodos("todos/fruits.json");
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
