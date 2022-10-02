/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let alphabetS = Array(25).fill(0);
    let alphabetT = Array(25).fill(0);
    let i = 0;

    while (i < s.length) {
        let indexS = s.charCodeAt(i) - 97;
        let indexT = t.charCodeAt(i) - 97;
        alphabetS[indexS]++;
        alphabetT[indexT]++;
        i++;
    }

    let lastIndex = t.charCodeAt(i) - 97;
    alphabetT[lastIndex]++;

    for (let i = 0; i < alphabetS.length; i++) {
        if (alphabetS[i] !== alphabetT[i]) {
            return String.fromCharCode(i + 97);
        }
    }
};