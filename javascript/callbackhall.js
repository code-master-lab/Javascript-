// please visit this link it will tell you all the things about callback hell
//https:chatgpt.com/share/6865585d-5620-800f-a6bd-a13e3551074d

// 👇👇

// this is callback hell
// Callback hell occurs when we have multiple nested callbacks, making the code hard to read and maintain.

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}
// this is callback hell
getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});

// 🚀 Converting to Promises to remove callback hell
// We can wrap getData to return a Promise:






// function getDataPromise(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve();
//         }, 2000);
//     });
// }

// getDataPromise(1)
// .then(() => getDataPromise(2))
// .then(() => getDataPromise(3))
// .then(() => getDataPromise(4));
