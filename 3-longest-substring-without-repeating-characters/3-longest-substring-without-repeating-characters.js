/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
        return 0;
    }

    let max = 1;
    let uniqueCharCount = 0;
    let left = 0;
    let right = 0;

    let seen = new Set();

    while (right < s.length) {
        if (!seen.has(s.charAt(right))) {
            seen.add(s[right]);
            uniqueCharCount++;
            right++;
        }
        else {
            max = Math.max(max, uniqueCharCount);
            seen.delete(s[left]);
            uniqueCharCount--;
            left++;
        }
    }
    return Math.max(max, uniqueCharCount);
};