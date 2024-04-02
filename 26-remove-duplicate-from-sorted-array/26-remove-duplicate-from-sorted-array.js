/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let lastSeen = nums[0];
  let insertionIndex = 1;
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === lastSeen || nums[i] < lastSeen) {
      continue;
    }

    let temp = nums[i];
    nums[i] = nums[insertionIndex];
    nums[insertionIndex] = temp;
    lastSeen = nums[insertionIndex];
    insertionIndex++;
    k++;
  }

  return k;
};

let nums = [1, 1, 1, 1, 1, 1, 1];

removeDuplicates(nums);
