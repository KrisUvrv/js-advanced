'use strict';

function race(promises) {
  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      promise
        .then(resolve)
        .catch(reject)
    }
  });
}


const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve(1), 500));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject("2, error"), 300));
const promise3 = new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000));

race([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
