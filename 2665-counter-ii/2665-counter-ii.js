/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  var initialValue = init;
  var val = init;

  return {
    increment() {
      return ++val;
    },

    decrement() {
      return --val;
    },

    reset() {
      val = initialValue;
      return val;
    },
  };
};

const counter = createCounter(5);
let a = counter.increment(); // 6
let b = counter.reset(); // 5
let c = counter.decrement(); // 4
let d = counter.increment();