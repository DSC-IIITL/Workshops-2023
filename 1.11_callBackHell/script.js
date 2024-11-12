// callback hell:
// Function to fetch a todo by ID
function fetchTodoById(id, callback) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(`Fetched Todo ID ${id}:`, data.title); 
      callback(null, data);
    })
    .catch((error) => {
      callback(error, null);
    });
}

// Nested callbacks simulating callback hell
fetchTodoById(1, (err, todo1) => {
  if (err) {
    console.log("Error fetching Todo 1:", err);
  } else {
    fetchTodoById(2, (err, todo2) => {
      if (err) {
        console.log("Error fetching Todo 2:", err);
      } else {
        fetchTodoById(3, (err, todo3) => {
          if (err) {
            console.log("Error fetching Todo 3:", err);
          } else {
            console.log("Successfully fetched Todos 1, 2, and 3!");
          }
        });
      }
    });
  }
});
  