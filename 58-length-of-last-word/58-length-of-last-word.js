/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let t = s.trim().split(' ');
    
    return t.at(-1).length;
};