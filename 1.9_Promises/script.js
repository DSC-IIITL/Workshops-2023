console.log("Start of script");

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true; 

    if (success) {
      resolve("The operation was successful!");
    } else {
      reject("The operation failed!");
    }
  }, 2000);
}
);

// Handling the Promise result
myPromise
  .then((message) => {
    console.log("Promise resolved:", message);
  })
  .catch((error) => {
    console.log("Promise rejected:", error);
  });

console.log("End of script");

/*
Expected Output:
1. Start of script
3. End of script
2. Promise resolved: The operation was successful!
OR
2. Promise rejected: The operation failed!

Explanation:
- The "Start of script" and "End of script" are logged first because the Promise is asynchronous.
- After a 2-second delay, the Promise either resolves or rejects, and the appropriate message is logged.
- The success or failure of the Promise is controlled by the `success` variable.
*/
