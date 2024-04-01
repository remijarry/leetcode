/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

  for (let i = 0; i < board.length; i++) {
      if (!isValidRow(board[i])) {
          return false;
      }
      if (!isValidColumn(board, i)) {
          return false;
      }

  }

  for (let i = 0; i < board.length; i += 3) {
      for (let j = 0; j < board.length; j += 3) {
          if (!isValidSquare(board, i, j)) {
              return false;
          }
      }
  }

  return true;
};

var isValidSquare = function (grid, rowIndex, colIndex) {
  let seen = new Map();
  for (let i = rowIndex; i < rowIndex + 3; i++) {
      for (let j = colIndex; j < colIndex + 3; j++) {
          if (grid[i][j] !== '.') {
              if (seen.has(grid[i][j])) {
                  return false;
              }
              seen.set(grid[i][j], true);
          }
      }
  }

  return true;
}

var isValidRow = function (row) {
  let seen = new Map();
  for (input of row) {
      if (input !== '.' && seen.has(input)) {
          return false;
      }

      seen.set(input, true);
  }

  return true;
}

var isValidColumn = function (grid, colIndex) {
  let seen = new Map();
  for (i = 0; i < grid.length; i++) {
      if (grid[i][colIndex] !== '.' && seen.has(grid[i][colIndex])) {
          return false;
      }

      seen.set(grid[i][colIndex], true);
  }

  return true;
}