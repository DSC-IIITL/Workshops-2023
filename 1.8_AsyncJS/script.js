//Difference between Sync and Async

console.log(1);
console.log(2);

setTimeout(() => {
    console.log("callback function fired");
}, 4000);

console.log(3);
console.log(4);

// let counter = 0;
// const interval = setInterval(() => {
//   counter += 1;
//   console.log(`Interval function executed ${counter} time(s)`);

//   // Stop the interval after 3 executions
//   if (counter === 3) {
//     clearInterval(interval);
//     console.log(" Interval stopped after 3 executions");
//   }
// }, 5000);
