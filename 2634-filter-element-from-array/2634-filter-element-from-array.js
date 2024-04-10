/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  var filtered = [];

  for (let i = 0; i < arr.length; i++) {
    let result = fn(arr[i], i);
    if (result) {
      filtered.push(arr[i]);
    }
  }

  return filtered;
};
