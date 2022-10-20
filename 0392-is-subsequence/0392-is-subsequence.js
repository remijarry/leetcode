/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length > t.length) {
        return false;
    }

    if (s.localeCompare(t) === 0) {
        return true;
    }
     let sPos = 0;
    let tPos = 0;

    while (tPos < t.length) {
        if (t.charAt(tPos) === s.charAt(sPos)) {
            sPos++;
        }

        tPos++;
        if (sPos === s.length) {
            return true;
        }
    }

    if (sPos === s.length) {
        return true;
    }

    return false;
};