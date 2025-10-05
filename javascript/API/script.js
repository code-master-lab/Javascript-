const URL = "https://catfact.ninja/fact"; // API endpoint to fetch random cat facts
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// Async/Await Implementation
// This function fetches a random cat fact from the API and updates the paragraph element with the
const getfacts = async () => {
  try {
    console.log("getting data .....");
    factPara.innerText = "Loading..."; // Show loading state

    let response = await fetch(URL);

    // this is optional,👇👇
    if (!response.ok) {
      // Check if the response status is not OK
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    //👆👆

    console.log(response); //printing response to know status
    
    // Convert the response to JSON👇👇

    let data = await response.json(); //👈👈
    
    console.log(data.fact); // Log the fact to the console for debugging

    factPara.innerText = data.fact; // Update the paragraph with the fetched fact
    console.log("fact updated"); // Log to confirm the fact has been updated
  } 
  
  catch (error) {
    console.error("Error fetching facts:", error);
    factPara.innerText = "Failed to load cat fact. Please try again.";
  }
};


// Promise-Based Implementation

// function getfacts() {
//   fetch(URL)
//     .then((response) => {
//       console.log(response)
//       return response.json();
//     })
//     .then((data) => {

//       console.log(data.fact);
//       factPara.innerText = data.fact;
//     });
// }

btn.addEventListener("click", getfacts); // Attach the click event listener to the button to call getfacts function