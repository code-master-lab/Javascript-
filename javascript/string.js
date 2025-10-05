// 🌟 Template Literals in JavaScript 🌟
// --------------------------------------
// Template literals are string literals that allow embedded expressions.
// They use backticks (``) instead of quotes (' or ").

// // ✅ Step 1: Declare user details using variables
// let userName = "Vivek";
// let age = 21;
// let course = "BCA";

// // ✅ Step 2: Use template literal to create a welcome message
// // We use backticks (` `) and ${variable} syntax to insert variables directly inside the string.
// let welcomeMessage = `👋 Hello, ${userName}! 
// You are ${age} years old and currently pursuing ${course}.\ntotal ${1+2+3} semester.
// Welcome to our learning platform! 🎓`;

// // ✅ Step 3: Output the message in the console
// console.log(welcomeMessage);


// let str = `vivek raut`;
// str.toUpperCase()
// console.log(str.toUpperCase())
// console.log(str)


// let str = `vivek raut`;
// let newstr = str.toUpperCase()
// console.log(str)
// console.log(newstr)

// let str = "vivek"
// let newstr = "raut"
// let res = "my name is " + str + newstr;
// console.log(res);

// 🌟 STRING FUNCTIONS IN JAVASCRIPT 🌟

// 🔹 Declare a string for demonstration
let message = "  Hello, JavaScript World!  ";
console.log("Original String:", message);

// --------------------------------------------
// 🔹 1. length ➡️ Returns the length of the string
console.log("Length of string:", message.length); // Includes spaces

// --------------------------------------------
// 🔹 2. trim() ➡️ Removes whitespace from both ends
let trimmedMessage = message.trim();
console.log("After trim():", trimmedMessage);

// --------------------------------------------
// 🔹 3. toUpperCase() ➡️ Converts to UPPERCASE
console.log("Uppercase:", trimmedMessage.toUpperCase());

// --------------------------------------------
// 🔹 4. toLowerCase() ➡️ Converts to lowercase
console.log("Lowercase:", trimmedMessage.toLowerCase());

// --------------------------------------------
// 🔹 5. includes() ➡️ Checks if string contains a substring (case-sensitive)
console.log("Includes 'JavaScript':", trimmedMessage.includes("JavaScript"));

// --------------------------------------------
// 🔹 6. startsWith() ➡️ Checks if string starts with given text
console.log("Starts with 'Hello':", trimmedMessage.startsWith("Hello"));

// --------------------------------------------
// 🔹 7. endsWith() ➡️ Checks if string ends with given text
console.log("Ends with 'World!':", trimmedMessage.endsWith("World!"));

// --------------------------------------------
// 🔹 8. indexOf() ➡️ Finds first index of a character or substring
console.log("Index of 'JavaScript':", trimmedMessage.indexOf("JavaScript"));

// --------------------------------------------
// 🔹 9. lastIndexOf() ➡️ Finds last occurrence index
console.log("Last index of 'o':", trimmedMessage.lastIndexOf("o"));

// --------------------------------------------
// 🔹 10. charAt() ➡️ Returns character at specific index
console.log("Character at index 7:", trimmedMessage.charAt(7));

// --------------------------------------------
// 🔹 11. slice(start, end) ➡️ Extracts part of the string
console.log("Slice from index 7 to 17:", trimmedMessage.slice(7, 17));

// --------------------------------------------
// 🔹 12. substring(start, end) ➡️ Similar to slice, but doesn't accept negative index
console.log("Substring 7 to 17:", trimmedMessage.substring(7, 17));

// --------------------------------------------
// 🔹 13. substr(start, length) ➡️ Extracts specified number of characters from start
console.log("Substr from 7, length 10:", trimmedMessage.substr(7, 10));

// --------------------------------------------
// 🔹 14. replace() ➡️ Replaces first occurrence
console.log("Replace 'JavaScript' with 'JS':", trimmedMessage.replace("JavaScript", "JS"));

// --------------------------------------------
// 🔹 15. replaceAll() ➡️ Replaces all occurrences
let sentence = "I love JavaScript. JavaScript is awesome!";
console.log("ReplaceAll 'JavaScript' with 'JS':", sentence.replaceAll("JavaScript", "JS"));

// --------------------------------------------
// 🔹 16. concat() ➡️ Joins two or more strings
let part1 = "Hello";
let part2 = "World";
console.log("Concatenated:", part1 + part2 );

// --------------------------------------------
// 🔹 17. split() ➡️ Splits string into array
let words = trimmedMessage.split(" ");
console.log("Split into words:", words);

// --------------------------------------------
// 🔹 18. repeat(n) ➡️ Repeats string n times
console.log("Repeat 'Hi' 3 times:", "Hi ".repeat(3));

// --------------------------------------------
// 🔹 19. match() ➡️ Finds match using regex
let result = trimmedMessage.match(/JavaScript/);
console.log("Match result:", result);

// --------------------------------------------
// 🔹 20. search() ➡️ Searches string using regex and returns index
console.log("Search 'World':", trimmedMessage.search("World"));

// --------------------------------------------
// 🔹 21. padStart(length, char) ➡️ Pads start of string
let numStr = "5";
console.log("PadStart to length 3:", numStr.padStart(3, "0")); // Output: "005"

// --------------------------------------------
// 🔹 22. padEnd(length, char) ➡️ Pads end of string
console.log("PadEnd to length 3:", numStr.padEnd(3, "0")); // Output: "500"

// --------------------------------------------
// 🔹 23. toString() ➡️ Converts value to string
let number = 123;
console.log("Number to string:", number.toString());

// --------------------------------------------
// 🔹 24. valueOf() ➡️ Returns primitive string value
console.log("valueOf result:", trimmedMessage.valueOf());

// --------------------------------------------
// 🔹 25. localeCompare() ➡️ Compares strings (lexicographically)
console.log("'apple' vs 'banana':", "apple".localeCompare("banana")); // -1: before

// --------------------------------------------
// 🔹 26. normalize() ➡️ Converts to Unicode Normal Form
let accented = "café";
console.log("Normalize string:", accented.normalize());
