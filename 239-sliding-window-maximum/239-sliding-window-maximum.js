/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (k === 1) {
        return nums;
    }

    let dequeue = [];
    for (let i = k - 1; i >= 0; i--) {
        if (nums[i] > nums[k-1]) {
            if (!dequeue.length) {
                dequeue.push(i);
            } else {
                if (nums[i] > nums[dequeue[0]]) {
                    dequeue.unshift(i);
                }
            }
        }
    }

    let left = 0;
    let right = k - 1;

    let ans = [];
    while (right < nums.length) {
        if (left > dequeue[0]) {
            dequeue.shift();

        }
        while (dequeue.length && nums[right] >= nums[dequeue.at(-1)]) {
            dequeue.pop();
        }
        dequeue.push(right);
        ans.push(nums[dequeue[0]]);
        left++;
        right++;
    }

    return ans;
};