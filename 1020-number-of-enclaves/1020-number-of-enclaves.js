/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
    let count = 0;
    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid[i].length - 1; j++) {
            if (grid[i][j] === 1) {
                count += dfs(grid, i, j);
            }
        }
    }

    return count;
};

var dfs = function (grid, row, col) {
    let stack = [[row, col]];
    let invalid = false;
    let enclaves = 0;
    while (stack.length) {
        const [row, col] = stack.pop();
        if (row === 0 || row === grid.length - 1 || col === 0 || col === grid[row].length - 1) {
            enclaves--;
            invalid = true;
        }
        grid[row][col] = 0;

        if (row - 1 < 0 || row + 1 === grid.length || col - 1 < 0 || col + 1 > grid[row].length) {
            continue;
        }


        enclaves++;
        if (grid[row + 1][col] === 1) {
            stack.push([row + 1, col]);
            grid[row + 1][col] = 0;
        }

        if (grid[row - 1][col] === 1) {
            stack.push([row - 1, col]);
            grid[row - 1][col] = 0;
        }

        if (grid[row][col + 1] === 1) {
            stack.push([row, col + 1])
            grid[row][col + 1] = 0;
        }

        if (grid[row][col - 1] === 1) {
            stack.push([row, col - 1])
            grid[row][col - 1]
        }
    }

    return invalid ? 0 : enclaves;
}
