// 🌟 JavaScript Program: Variables, Data Types, and typeof Operator

// ========================================================
// 🔹 1. Variable Declarations using let, const, and var
// ========================================================

// 🔸 Using 'let'
// 'let' allows you to declare a variable that can be changed later.
// It is block-scoped, which means it exists only inside { }.

let name = "Vivek";
console.log("Name (let):", name); // Output: Vivek

// Updating value
name = "Vivek Raut";
console.log("Updated Name (let):", name); // Output: Vivek Raut


// 🔸 Using 'const'
// 'const' is used when the value should not be changed once declared.
// It must be initialized immediately, and is also block-scoped.

const country = "India";
console.log("Country (const):", country); // Output: India

// Uncommenting the below line will cause an error because const cannot be reassigned
// country = "USA"; // ❌ Error: Assignment to constant variable


// 🔸 Using 'var'
// 'var' is the old way of declaring variables.
// It is function-scoped, not block-scoped, and can be re-declared.

var age = 21;
console.log("Age (var):", age); // Output: 21

age = 22; // ✅ Updating is allowed
console.log("Updated Age (var):", age); // Output: 22

var age = 23; // ✅ Re-declaration is also allowed (not safe!)
console.log("Re-declared Age (var):", age); // Output: 23



// ========================================================
// 🔹 2. Data Types in JavaScript
// ========================================================

// 🔸 String (text inside quotes)
let city = "Mumbai";
console.log("City:", city); // Output: Mumbai

// 🔸 Number (integers or decimals)
let marks = 95.5;
console.log("Marks:", marks); // Output: 95.5

// 🔸 Boolean (true or false)
let isPassed = true;
console.log("Passed:", isPassed); // Output: true

// 🔸 Undefined (declared but not assigned)
let subject;
console.log("Subject:", subject); // Output: undefined

// 🔸 Null (manually set to empty)
let project = null;
console.log("Project:", project); // Output: null

// 🔸 Object (key-value pair structure)
let student = {
  fullName: "Vivek Raut",
  rollNo: 23,
  course: "BCA"
};
console.log("Student Object:", student); // Output: Object with keys

// 🔸 Array (list of values)
let colors = ["Red", "Green", "Blue"];
console.log("Colors Array:", colors); // Output: [ 'Red', 'Green', 'Blue' ]

// 🔸 Symbol (used to create unique identifiers)
let uniqueId = Symbol("ID_123");
console.log("Symbol Value:", uniqueId); // Output: Symbol(id)

// 🔸 BigInt (for very large numbers beyond normal number range)
let bigNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt Number:", bigNumber); // Output: 1234567890...n



// ========================================================
// 🔹 3. Type Checking using typeof
// ========================================================

console.log("Type of name:", typeof name);           // string
console.log("Type of country:", typeof country);     // string
console.log("Type of age:", typeof age);             // number
console.log("Type of city:", typeof city);           // string
console.log("Type of marks:", typeof marks);         // number
console.log("Type of isPassed:", typeof isPassed);   // boolean
console.log("Type of subject:", typeof subject);     // undefined
console.log("Type of project:", typeof project);     // object (null is considered object - special case)
console.log("Type of student:", typeof student);     // object
console.log("Type of colors:", typeof colors);       // object (arrays are objects)
console.log("Type of uniqueId:", typeof uniqueId);   // symbol
console.log("Type of bigNumber:", typeof bigNumber); // bigint











