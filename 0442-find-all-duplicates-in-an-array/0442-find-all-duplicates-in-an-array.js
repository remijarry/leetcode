/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let counts = Array(nums.length + 1).fill(0);

    for (let num of nums) {
        counts[num]++;
    }

    let ans = [];

    for (let i = 0; i < counts.length; i++) {
        if (counts[i] > 1) {
            ans.push(i);
        }
    }

    return ans;
};