/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix = 1;

    let arr = [1];
    for (let i = 0; i < nums.length - 1; i++) {
        prefix *= nums[i];
        arr.push(prefix);
    }

    let postfix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        arr[i] = arr[i] * postfix;
        postfix *= nums[i];
    }

    return arr;
};

let a = [1, 2, 3, 4];

productExceptSelf(a);