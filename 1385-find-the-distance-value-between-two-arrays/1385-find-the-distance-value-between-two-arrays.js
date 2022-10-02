/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    arr1.sort((a, b) => {
        return a - b
    });
    arr2.sort((a, b) => { return a - b });

    let distance = arr1.length;
    let arr1Right = arr1.length - 1;


    while (arr1Right >= 0) {
        let left = 0;
        let right = arr2.length - 1;
        valid = true;

        while (left <= right && valid) {
            let mid = Math.floor(left + (right - left) / 2);
            if (Math.abs(arr1[arr1Right] - arr2[mid]) <= d) {
                valid = false;
            }
            else if (arr2[mid] > arr1[arr1Right]) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }

        if (!valid) {
            distance--;
        }
        arr1Right--;
    }

    return distance;
};