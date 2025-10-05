// // 🌟 Creating an array of fruits
// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// // 🖨️ Printing the whole array
// console.log("All fruits:", fruits);

// // 📦 Accessing elements by index (index starts from 0)
// console.log("First fruit:", fruits[0]); // Output: Apple
// console.log("Third fruit:", fruits[2]); // Output: Mango

// // ➕ Adding a new fruit to the end of the array
// fruits.push("Grapes");
// console.log("After adding Grapes:", fruits);

// // ➖ Removing the last fruit
// fruits.pop();
// console.log("After removing last fruit:", fruits);

// // 🟢 Adding a fruit at the beginning
// fruits.unshift("Strawberry");
// console.log("After adding at beginning:", fruits);

// // 🔴 Removing the first fruit
// fruits.shift();
// console.log("After removing first fruit:", fruits);

// // 🔁 Loop through the array and print each fruit
// console.log("Looping through array:");
// for (let i = 0; i < fruits.length; i++) {
//     console.log("Fruit at index", i, "is", fruits[i]);
// }

// foreach loop
fruits.forEach((fruit, index) => {
  console.log(`Fruit at index ${index} is ${fruit}`);
});

let fruits = ["Apple", "Banana", "Mango", "Orange"];
let vegetables = ["Carrot", "Broccoli", "Spinach"];
let newiteam = fruits.concat(vegetables);
let plaseiteam = fruits + vegetables;
console.log("Fruits:", newiteam);
console.log("Fruits:", plaseiteam);
