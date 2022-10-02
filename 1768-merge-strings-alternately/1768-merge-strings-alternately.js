/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let left1 = 0;
    let left2 = 0;

    let newWord = '';
    while (left1 < word1.length && left2 < word2.length) {
        newWord += word1.charAt(left1++);
        newWord += word2.charAt(left2++);

    }

    if (left1 < word1.length) {
        newWord += word1.substring(left1);
    }
    else if (left2 < word2.length) {
        newWord += word2.substring(left2);
    }

    return newWord;
};