/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let j = 2;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[j - 2]) {
      nums[j++] = nums[i];
    }
  }
  return j;
};



nums = [1, 1, 1, 2, 2, 3];
removeDuplicates(nums);

//TODO
