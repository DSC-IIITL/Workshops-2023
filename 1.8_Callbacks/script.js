// callback hell:
const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
      //   change data to request.responseText to get the data in non JSON format
    } else if (request.readyState === 4) {
      callback("couldn't fetch data", undefined);
    }
  });

  request.open("GET", resource);
  request.send();
};

getTodos("todos/fruits.json", (err, data1) => {
  console.log(data1);
  getTodos("todos/marvel.json", (err, data2) => {
    console.log(data2);
    getTodos("todos/months.json", (err, data3) => {
      console.log(data3);
    });
  });
});
