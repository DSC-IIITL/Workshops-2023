// Difference between Sync and Async

// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log("callback function fired");
// }, 8000);

// console.log(3);
// console.log(4);

// HTTP Requests and status codes

const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
//   console.log(request, request.readyState);
if(request.readyState === 4 && request.status === 200){
    console.log(request.responseText)
} else if(request.readyState ===4){
    console.log("couldn't fetch data");
}
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
request.send();

