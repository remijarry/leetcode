/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if (n * m != original.length) {
        return [];
    }
    let ans = [];
    let count = 0;

    for (let i = 0; i < m; i++) {
        let temp = [];
        for (let j = 0; j < n; j++) {
            temp.push(original[count++]);
        }
        ans.push(temp);
    }
    return ans;
};