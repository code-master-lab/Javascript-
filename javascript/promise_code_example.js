// 🚀 Promise Chaining in JavaScript to Execute Asynchronous Tasks Sequentially

// Function asyncFunc1 returns a Promise that resolves after 4 seconds
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    // Using setTimeout to simulate a delay of 4 seconds
    setTimeout(() => {
      console.log("data1"); // Prints "data1" after 4 seconds
      resolve("success from func1"); // Resolves the Promise indicating success
    }, 4000);
  });
}

// Function asyncFunc2 returns a Promise that resolves after 4 seconds
function asyncFunc2() {
  return new Promise((resolve, reject) => {
    // Using setTimeout to simulate a delay of 4 seconds
    setTimeout(() => {
      console.log("data2"); // Prints "data2" after 4 seconds
      resolve("success from func2"); // Resolves the Promise indicating success
    }, 4000);
  });
}

// Initial message printed immediately to indicate the start of data1 fetching
console.log("Fetching data1...");

// The code start from here👇

// Call asyncFunc1 to start fetching data1
asyncFunc1()
  .then((res) => {
    // This block runs AFTER asyncFunc1 finishes (after 4 seconds)
    // 'res' will contain "success from func1" (if you want to console log it for clarity, you can)
    console.log("Fetching data2..."); // Prints fetching data2
    return asyncFunc2(); // Return asyncFunc2 Promise to chain the next .then
  })
  .then((res) => {
    // This block runs AFTER asyncFunc2 finishes (after another 4 seconds)
    // 'res' will contain "success from func2" (if you want to console log it for clarity, you can)
    console.log("All data fetched successfully!"); // Final message indicating completion
  });
