/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe(i) {
      if (val === i) {
        return true;
      }

      throw new Error("Not Equal");
    },
    notToBe(i) {
      if (val !== i) {
        return true;
      }

      throw new Error("Equal");
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

let toBe = expect(5).toBe(4);
let notToBe = expect(5).notToBe(5);
