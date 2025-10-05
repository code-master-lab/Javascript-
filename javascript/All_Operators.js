// 🌟 JavaScript Operator Demonstration using Two Numbers

// 🔢 Step 1: Declare two numbers
let a = 10;
let b = 3;

console.log("Number a =", a);
console.log("Number b =", b);
console.log("------------------------------");

// 💠 1. Arithmetic Operators
// ➤ These operators are used to perform basic mathematical operations.
console.log("💠 Arithmetic Operators");
console.log("a + b =", a + b); // Addition: Adds a and b
console.log("a - b =", a - b); // Subtraction: Subtracts b from a
console.log("a * b =", a * b); // Multiplication: Multiplies a and b
console.log("a / b =", a / b); // Division: Divides a by b (gives decimal value)
console.log("a % b =", a % b); // Modulus: Gives remainder of a divided by b
console.log("a ** b =", a ** b); // Exponentiation: a raised to the power of b
console.log("------------------------------");

// 💠 2. Assignment Operators
// ➤ These operators are used to assign values to variables, including updating them with math operations.
console.log("💠 Assignment Operators");
let x = a;
console.log("x =", x);
x += b; // x = x + b
console.log("x += b =>", x); // Adds b to x
x -= b; // x = x - b
console.log("x -= b =>", x); // Subtracts b from x
x *= b; // x = x * b
console.log("x *= b =>", x); // Multiplies x by b
x /= b; // x = x / b
console.log("x /= b =>", x); // Divides x by b
x %= b; // x = x % b
console.log("x %= b =>", x); // Finds remainder of x divided by b
console.log("------------------------------");

// 💠 3. Comparison Operators
// ➤ These operators compare two values and return true or false.
console.log("💠 Comparison Operators");
console.log("a == b =>", a == b); // Checks if values are equal (ignores type)
console.log("a === b =>", a === b); // Checks if values and types are both equal
console.log("a != b =>", a != b); // Checks if values are not equal
console.log("a !== b =>", a !== b); // Checks if values or types are not equal
console.log("a > b =>", a > b); // Checks if a is greater than b
console.log("a < b =>", a < b); // Checks if a is less than b
console.log("a >= b =>", a >= b); // Checks if a is greater than or equal to b
console.log("a <= b =>", a <= b); // Checks if a is less than or equal to b
console.log("------------------------------");

// 💠 4. Logical Operators
// ➤ These operators are used to combine or reverse conditions (mostly used in decision-making).
console.log("💠 Logical Operators");
console.log("a > 5 && b < 5 =>", a > 5 && b < 5); // AND: true only if both conditions are true
console.log("a > 5 || b > 5 =>", a > 5 || b > 5); // OR: true if at least one condition is true
console.log("!(a > 5) =>", !(a > 5)); // NOT: reverses the result (true becomes false)
console.log("------------------------------");

// 💠 5. Unary Operators
// ➤ These operators work with only one operand (variable).
console.log("💠 Unary Operators");
console.log("++a =", ++a); // Pre-increment: adds 1 to a, then returns new value
console.log("--b =", --b); // Pre-decrement: subtracts 1 from b, then returns new value
console.log("a++ =", a++); // Post-increment: returns value of a, then adds 1
console.log("a after a++ =", a); // Shows updated value after post-increment
console.log("b-- =", b--); // Post-decrement: returns value of b, then subtracts 1
console.log("b after b-- =", b); // Shows updated value after post-decrement
console.log("------------------------------");

// 💠 6. Ternary Operator
// ➤ A shortcut for if-else condition; returns one of two values based on condition.
console.log("💠 Ternary Operator");
let result = a > b ? "a is greater" : "b is greater";
console.log("Result of (a > b) ? =>", result);
console.log("------------------------------");

// 💠 7. Type Operators
// ➤ These operators are used to find the type of a variable or check its instance.
console.log("💠 Type Operators");
console.log("typeof a =", typeof a); // typeof: tells the data type of a
console.log("typeof result =", typeof result); // typeof: tells the data type of result
console.log("a instanceof Number =>", a instanceof Number);
// instanceof: checks if 'a' is an instance of Number class (false because 'a' is a primitive)
console.log("------------------------------");

// 🧠 What is instanceof in JavaScript?
// The instanceof operator is used to check if an object is created using a specific constructor or class.
//The constructor means sending the values through argument like new Number(10) or new String("Hello").
// Example:

// let numObj = new Number(10);
// console.log(numObj instanceof Number); // true

// ✔️ This returns true because numObj is created using new Number() — it’s an object, not a simple number.
