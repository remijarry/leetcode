/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let cBoundaryIndex = 1;
  let rBoundaryIndex = 1;

  // right, bottom, left, top
  let columnboundaries = [0, matrix[0].length];
  let rowBoundaries = [0, matrix.length];

  let directionIndex = 0;
  let directions = [
    // right
    [0, 1],
    // down
    [1, 0],
    // left
    [0, -1],
    // top
    [-1, 0],
  ];

  let rowLeft = matrix.length - 1;

  let x = 0;
  let y = 0;

  let result = [];
  while (rowLeft > 1) {
    result.push(matrix[x][y]);
    let d = directions[directionIndex];
    [x, y] = [x + d[0], y + d[1]];

    

    if (d[1] > 0) {
      if (y >= columnboundaries[cBoundaryIndex]) {
        y--; // go back inbound
        directionIndex = (directionIndex + 1) % directions.length;
      }
    } else if (d[1] < 0) {
      if (y < columnboundaries[cBoundaryIndex]) {
        y++;
        directionIndex = (directionIndex + 1) % directions.length;
      }
    }

    if (d[0] > 0) {
      if (x >= rowBoundaries[rBoundaryIndex]) {
        x--;
        directionIndex = (directionIndex + 1) % directions.length;
        rowLeft--;
      } else if (x < rowBoundaries[rBoundaryIndex]) {
        x++;
        directionIndex = (directionIndex + 1) % directions.length;
        rowLeft--;
      }
    }
  }
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let result = spiralOrder(matrix);
console.log(result);
