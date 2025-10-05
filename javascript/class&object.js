// // explanation on chatgpt
// // https://chatgpt.com/share/6860e5df-6fe8-800f-a89f-76a85a9d68c7 👈👈👈👈

// // Creating a class named Car   this is a main program to demonstrate👇👇
// class Car {
//   // Constructor to initialize object properties
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }

//   // Method to display car details
//   displayDetails() {
//     console.log("Car Brand: " + this.brand);
//     console.log("Car Model: " + this.model);
//     console.log("Car Year: " + this.year);
//   }

//   // Method to start the car
//   start() {
//     console.log(this.brand + " " + this.model + " is starting...");
//   }
// }

// // Creating objects of the Car class
// let car1 = new Car("Toyota", "Camry", 2020);
// let car2 = new Car("Honda", "Civic", 2022);

// // Using object methods
// car1.displayDetails();
// car1.start();

// console.log("---------------------");

// car2.displayDetails();
// car2.start();

// // This is a simple program👇👇

// // class Student {
// //     constructor(name, grade) {
// //         this.name = name;
// //         this.grade = grade;
// //     }

// //     // You can decide this function name
// //     printInfo() {
// //         console.log("Name: " + this.name);
// //         console.log("Grade: " + this.grade);
// //     }
// // }

// // let student1 = new Student("Vivek", "A");
// // student1.printInfo();

// //super() funcation in class inheritance👇👇

// // Parent class
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   sound() {
//     console.log(this.name + " makes a sound.");
//   }
// }

// // Child class
// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); // Calls the parent class constructor with 'name'
//     this.breed = breed; // Initializes additional property of child
//   }

//   // Overriding and using parent's method with super
//   sound() {
//     super.sound(); // Calls the parent class sound() method
//     console.log(this.name + " barks.");
//   }

//   showDetails() {
//     console.log("Name: " + this.name);
//     console.log("Breed: " + this.breed);
//   }
// }

// // error handling using try and catch  👇👇?

// // Creating object of Dog class
// let myDog = new Dog("Tommy", "German Shepherd");

// // Calling methods
// myDog.showDetails(); // Displays dog's name and breed
// myDog.sound(); // Calls both parent and child sound methods

// try {
//   // Code that may cause an error
// } catch (error) {
//   // Code to handle the error
//   console.log(error);
// }

function asyncfunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
    }, 4000);
  });
}

console.log("fetching data1......");

let p1 = asyncfunc();
p1.then((data) => {
  console.log(data);
});
p1.catch((error) => {
  console.log(error);
});
