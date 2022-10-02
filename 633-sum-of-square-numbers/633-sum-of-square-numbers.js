/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    if (c === 0 || c === 1) {
        return true;
    }

    let firstBelowC = Math.floor(Math.sqrt(c));

    let map = new Map();
    for (let i = 0; i <= firstBelowC; i++) {
        let powtwo = i ** 2;

        if (powtwo + powtwo === c) {
            return true;
        }

        let target = c - powtwo;

        if (map.has(target)) {
            return true;
        } else {
            map.set(powtwo, c - powtwo);
        }
    }

    return false;
};