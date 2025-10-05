// this are the some basic funcation in javascrript

// // ✅ 1. Named Function
// function greet() {
//   console.log("Hello, Vivek!");
// }
// greet(); // Output: Hello, Vivek!

// // ✅ 2. Function with Parameters and Return
// function add(a, b) {
//   return a + b;
// }
// let sum = add(5, 3);
// console.log("Sum:", sum); // Output: Sum: 8

// // ✅ 3. Arrow Function
// const multiply = (x, y) => x * y;
// console.log("Product:", multiply(4, 5)); // Output: Product: 20

// // ✅ 4. Function Expression
// const sayHi = function() {
//   console.log("Hi there!  " );
// };
// sayHi(); // Output: Hi there!

// // ✅ 5. Callback Function
// function greetUser(name) {
//   console.log("Welcome " + name);
// }

// function processUser(callback) {
//   let Name = "Vivek";
//   callback(Name);
// }

// processUser(greetUser); // Output: Welcome Vivek

function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";

  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  console.log("Total vowels:", count);
}

// 👇 Call the function and give your name
countVowels("Vivek Raut"); // Output: Total vowels: 4


