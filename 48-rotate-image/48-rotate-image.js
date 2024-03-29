/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // step 1: transpose
  let flipped = new Map();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0 && j === 0 || i === matrix.length - 1 && j === matrix.length - 1) {
        continue; // these cells transposed end up in the same position
      }
      if (!flipped.has(`${i}-${j}`)) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
        flipped.set(`${i}-${j}`, true);
        flipped.set(`${j}-${i}`, true);
      }
    }
  }

  // step 2: reverse
  for(let i = 0; i < matrix.length; i++) {
    let left = 0;
    let right = matrix[i].length - 1;
    while (left < right) {
      let temp = matrix[i][left];
      matrix[i][left] = matrix[i][right];
      matrix[i][right] = temp;
      left++;
      right--;
    }
  }
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotate(matrix);
