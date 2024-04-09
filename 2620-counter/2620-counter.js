/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let counter = n;
  return function () {
    return counter++;
  };
};

const counter = createCounter(10);
let a = counter(); // 10
let b = counter(); // 11
let c = counter(); // 12
