/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let insertIndex = m;
  let p = 0;

  while (p < n) {
    let number = nums2[p];
    let i = insertIndex - 1;
    let j = insertIndex;
    while (nums1[i] > number) {
      nums1[j--] = nums1[i--];
    }
    nums1[j] = number;
    insertIndex++;
    p++;
  }
};

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
