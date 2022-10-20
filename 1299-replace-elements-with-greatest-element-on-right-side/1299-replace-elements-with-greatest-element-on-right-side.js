/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    let nextGreater = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        arr[i] = nextGreater;
        nextGreater = Math.max(nextGreater, temp);
    }

    return arr;
};