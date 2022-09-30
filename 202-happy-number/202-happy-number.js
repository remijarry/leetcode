/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let t = n;
    let map = new Map();

    while (t !== 1) {
        let s = t;
        let sum = 0;
        while (s > 0) {
            sum += Math.pow((s % 10), 2);
            s = Math.floor(s / 10);
        }
        if (map.has(sum)) {
            return false;
        } else {
            map.set(sum, true);
        }

        t = sum;
    }

    return true;
};