/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  let a = await promise1;
  let b = await promise2;

  return a + b;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

let promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
let promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2);
2621-sleep
