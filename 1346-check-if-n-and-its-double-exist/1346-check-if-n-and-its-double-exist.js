/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let double = 2 * arr[i];
        if (!map.has(double)) {
            map.set(double, i);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i]) && map.get(arr[i]) !== i) {
            return true
        }
    }

    return false;
};