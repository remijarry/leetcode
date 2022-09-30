/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let sequence = new Set();

    for (let i = 0; i < nums.length; i++) {
        sequence.add(nums[i]);
    }

    let longestSequence = 1;
    for (let number of sequence.values()) {
        if (sequence.has(number -1)) {
            continue;
        }
        
        let currentSequenceCount = 1;
        let next = number + 1;
        while (sequence.has(next)) {
            currentSequenceCount++;
            next++;
        }
        longestSequence = Math.max(longestSequence, currentSequenceCount);
    }
    return longestSequence;
};