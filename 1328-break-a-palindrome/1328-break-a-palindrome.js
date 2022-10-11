/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function (palindrome) {
    if (palindrome.length === 1) {
        return "";
    }

    let index = 0;

    let oddLength = palindrome.length % 2 === 1;
    let mid = Math.floor(palindrome.length / 2);

    while (palindrome.charAt(index) === 'a' && index < palindrome.length) {
        index++;
    }

    // case where palindrome is odd
    if (oddLength && index === mid) {
        index = palindrome.length - 1;
    }
    
    if (index === palindrome.length) {
        index--;
    }

    let ans = "";
    for (let i = 0; i < palindrome.length; i++) {
        if (i === index) {
            if (palindrome.charAt(i) === 'a') {
                ans += 'b';
            } else {
                ans += 'a';
            }
        } else {
            ans += palindrome.charAt(i)
        }
    }
    return ans;
};