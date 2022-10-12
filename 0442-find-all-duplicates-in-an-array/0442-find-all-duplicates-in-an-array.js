/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) {
            ans.push(Math.abs(index + 1))
        }
        nums[index] = -nums[index];
    }

    return ans;
};