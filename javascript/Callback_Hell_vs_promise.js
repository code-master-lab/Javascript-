// https://chatgpt.com/c/68654ae4-3e2c-800f-aa67-7413a0b89720

// This is callback hell code in nested loop from  👇👇

// This function simulates fetching data with a 5-second delay using setTimeout.
// It accepts a dataId to indicate which data we are fetching and a callback to run after fetching.
function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId); // Print which data is fetched
    if (getNextData) {
      getNextData(); // If a next callback is provided, call it after this data fetch completes
    }
  }, 3000); // 3-second delay to simulate slow data fetching
}

// Using nested callbacks to fetch data sequentially.
// This leads to "callback hell" due to deep nesting when multiple async tasks need to run in order.
getData(1, () => {
  console.log("Fetching data 2...");
  getData(2, () => {
    console.log("Fetching data 3...");
    getData(3, () => {
      console.log("Fetching data 4...");
      getData(4, () => {
        console.log("All data fetched using callback hell!");
      });
    });
  });
});



// This function returns a Promise, allowing us to handle async tasks cleanly without nesting.
// It simulates data fetching with a 5-second delay using setTimeout.
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId); // Print which data is fetched
      resolve("success"); // Resolve the Promise after fetching
    }, 5000);
  });
}

// Using Promise chaining to fetch data sequentially in a clean, readable way.
getData(1)
  .then(() => {
    console.log("Fetching data 2...");
    return getData(2); // Waits for getData(2) to finish before moving to the next .then()
  })
  .then(() => {
    console.log("Fetching data 3...");
    return getData(3); // Waits for getData(3) to finish before moving to the next .then()
  })
  .then(() => {
    console.log("Fetching data 4...");
    return getData(4); // Waits for getData(4) to finish before moving to the next .then()
  })
  .then(() => {
    console.log("All data fetched using Promise chaining!"); // Executes when all data is fetched
  })
  .catch((err) => {
    console.log("Error occurred:", err); // Catches and logs any error that occurs during fetching
  });




 // 💎 Key Feel to Remember:
// Callback Hell:
// Easy to start, but nested deeply when tasks increase.

// Difficult to maintain and debug for multiple dependent async tasks.

// Promise Chain:
// Flat, linear, readable structure using .then().

// Easy to add error handling.

// Makes async sequential tasks easy and professional.