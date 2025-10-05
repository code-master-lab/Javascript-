// / please visit this link it will tell you all the things about promises
//https://chatgpt.com/share/6867d997-fffc-800f-80bf-ad32dee3a43a

// this is syntex of promise

let promise = new Promise(function (resolve, reject) {
  // your async task here
  if (success) {
    resolve(result);
  } else {
    reject(error);
  }
});

promise
  .then(function (result) {
    // handle success
  })
  .catch(function (error) {
    // handle error
  });

// Example of using a promise

function checkEven(number) {
  return new Promise(function (resolve, reject) {
    if (number % 2 === 0) {
      resolve("Even number");
    } else {
      reject("Odd number");
    }
  });
}

checkEven(5)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
