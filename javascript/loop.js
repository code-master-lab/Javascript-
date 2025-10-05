// =====================
// Sum from 1 to n
// =====================

// let sum = null;
// alert("You have to fill the number to stop the loop");
// let n = prompt("Enter a number to stop the loop");
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log("value of sum ", sum, "end total number is  ", n);
// console.log(" loop has end");

// =====================
// let vs var in for loops
// =====================

// let i;
// for (i = 1; i <= 5; i++) {
//     console.log("i =", i);
// }
// console.log(i);
// console.log("you can not access i verible here because it create by let funcation"); // we cannot access the i here because of its under the block
// //It's not applicable to access the eye outside the block of code {}

// for (var j = 1; j <= 5; j++) {
//     console.log("j =", j);
// }
// console.log(" but j is create by ver funcation so it can access", j); // we can access the j here because of its under the block

// =====================
// Guess the number game (simple version)
// =====================

// let gamenum = 25;
// let username = prompt("Enter a number");

// while (username != gamenum) { // using ==
//     console.log("Wrong guess");
//     username = prompt("Try again");
//     break; // this will stop the loop after one iteration
// }

// console.log("You guessed the number correctly!"); // this will not run because of the while loop

// =====================
// Guess the number game (infinite loop version)
// =====================

// let gamenum = 25;
// let username = prompt("Enter a number");
// let guessedCorrectly = false;

// while (true) { // infinite loop
//     if (username == gamenum) {
//         guessedCorrectly = true;
//         break;
//     } else {
//         console.log("Wrong guess");
//         username = prompt("Try again");
//         break; // exit loop after 1 try
//     }
// }

// // Print only if guess was correct
// if (guessedCorrectly) {
//     console.log("You guessed the number correctly!");
// }

// =====================
// ATM PIN Entry System
// =====================

// let correctPIN = "1234";  // 🔐 The secret ATM PIN
// let attempts = 0;         // 🔢 Count how many times user tried

// console.log("🏦 Welcome to ATM PIN Entry System");

// while (true) {
//     let userPIN = prompt("🔑 Enter your 4-digit ATM PIN:");

//     attempts++; // ➕ Add one attempt each time

//     if (userPIN == correctPIN) {
//         console.log("✅ Access granted! Welcome to your account.");
//         break; // 🎉 Correct PIN, stop the game
//     } else {
//         console.log(`❌ Incorrect PIN. Attempts left: ${3 - attempts}`);
//     }

//     // 🚫 If user tries 3 times wrongly, block the card
//     if (attempts == 3) {
//         console.log("🚨 Card blocked after 3 failed attempts.");
//         break;
//     }
// }
