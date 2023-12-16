// Difference between Sync and Async

// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log("callback function fired");
// }, 8000);

// console.log(3);
// console.log(4);

// HTTP Requests,status codes and callback

const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    //   console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      //   console.log(request.responseText);
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
      //   change data to request.responseText to get the
    } else if (request.readyState === 4) {
      //   console.log("couldn't fetch data");
      callback("couldn't fect data", undefined);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.send();
};

getTodos((err, data) => {
  console.log("callback fired");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
