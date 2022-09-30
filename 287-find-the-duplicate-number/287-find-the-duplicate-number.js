/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = 0;
    let fast = 0;


    while (fast < nums.length && nums[fast] < nums.length) {
        slow = nums[slow];
        fast = nums[nums[fast]];

        if (slow === fast) {
            slow = 0;
            while (slow !== fast) {
                slow = nums[slow];
                fast = nums[fast];
            }
            return slow;
        }
    }


    return -1;
};