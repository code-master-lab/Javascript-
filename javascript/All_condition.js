// 🌟 JavaScript Conditional Statements Demo
// This program checks marks and prints grade using various conditional statements

// 🔢 Step 1: Declare marks
let marks = 85; // You can change this value to test different conditions

console.log("Student Marks:", marks);

// -------------------------------------------------
// 💠 1. IF Statement
// ➤ Checks one condition only.
// ➤ If it's true, it runs the block. If false, it does nothing.
if (marks > 80) {
  console.log("IF: Excellent! You scored above 80.");
}
console.log("------------------------------");

// -------------------------------------------------
// 💠 2. IF - ELSE Statement
// ➤ Checks a condition.
// ➤ If true, runs the 'if' block.
// ➤ If false, runs the 'else' block.
if (marks >= 40) {
  console.log("IF-ELSE: You passed the exam.");
} else {
  console.log("IF-ELSE: You failed the exam.");
}
console.log("------------------------------");

// -------------------------------------------------
// 💠 3. IF - ELSE IF - ELSE Ladder
// ➤ Used when there are multiple conditions to check one by one.
if (marks >= 90) {
  console.log("IF-ELSE-IF: Grade = A+");
} else if (marks >= 75) {
  console.log("IF-ELSE-IF: Grade = A");
} else if (marks >= 60) {
  console.log("IF-ELSE-IF: Grade = B");
} else if (marks >= 40) {
  console.log("IF-ELSE-IF: Grade = C");
} else {
  console.log("IF-ELSE-IF: Grade = Fail");
}
console.log("------------------------------");

// -------------------------------------------------
// 💠 4. SWITCH Statement
// ➤ Used when you want to match a specific value (not a range).
// ➤ Very useful when dealing with fixed cases.
let grade = "A";

switch (grade) {
  case "A+":
    console.log("SWITCH: Outstanding Performance");
    break;
  case "A":
    console.log("SWITCH: Very Good");
    break;
  case "B":
    console.log("SWITCH: Good");
    break;
  case "C":
    console.log("SWITCH: Needs Improvement");
    break;
  default:
    console.log("SWITCH: Invalid Grade");
}
console.log("------------------------------");
