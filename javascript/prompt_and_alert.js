//name verible use to store the value returned by the prompt function
//let name = prompt("Hi Vivek")// This code snippet is a simple JavaScript prompt that displays a message to the user.
//console.log(name);  //the value stored in verible will print in console
// The prompt function is used to display a dialog box that prompts the user for input. ⭐⭐⭐
// It uses the prompt function to show a dialog box with the message "Hi Vivek".
// with a text input field for the user to respond.
// The prompt function is commonly used for user input in web applications.

// 🌟 JavaScript: Demo of alert() and prompt()

// 🔸 Step 1: Show a welcome message using alert()
// alert() is used to show a popup message to the user
alert("Welcome to My Simple JavaScript Program!");

// 🔸 Step 2: Ask the user for their name using prompt()
// prompt() shows an input box and lets the user type something
let userName = prompt("What is your name?"); //THE username stored a value returned by the prompt function

// 🔸 Step 3: Show a greeting message using the name entered
// We use the value stored in userName to make the message personal
alert("Hello " + userName + "! Nice to meet you."); // this username verible contains the value entered by the user in the prompt function

// 🔸 Step 4: Ask the user for their age
let age = prompt("How old are you?");

// 🔸 Step 5: Convert age to number (prompt returns string by default)
age = Number(age); // or use parseInt(age)    //Prompt function take  a value in by default in string format, so we convert it to a number

// 🔸 Step 6: Use conditional logic to show a message based on age
if (age >= 18) {
  alert("You are an adult.");
} else {
  alert("You are a minor.");
}

// 🎉 Done! You just used prompt(), alert(), variables, and conditions
