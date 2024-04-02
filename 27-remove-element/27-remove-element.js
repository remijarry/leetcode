/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 1. find insertion point from end of array
  let insertionPoint = nums.length - 1;
  while (nums[insertionPoint] === val) {
    insertionPoint--;
  }

  let k = 0;
  for (let i = 0; i <= insertionPoint; i++) {
    if (nums[i] === val) {
      temp = nums[insertionPoint];
      nums[insertionPoint] = nums[i];
      nums[i] = temp;
      while (nums[insertionPoint] === val) {
        insertionPoint--;
      }
    }
    k++;
  }
  return k;
};

