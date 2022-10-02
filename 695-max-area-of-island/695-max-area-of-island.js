/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let maxArea = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                maxArea = Math.max(maxArea, calculateMaxArea(grid, i, j));
            }
        }
    }

    return maxArea;
};

let calculateMaxArea = function (grid, row, col) {
    return dfs(grid, row, col);
}

let dfs = function (grid, row, col) {
    let count = 0;
    let stack = [[row, col]];

    while (stack.length) {
        const [row, col] = stack.pop();
        count++;
        grid[row][col] = 0;

        if (row - 1 >= 0 && grid[row - 1][col] === 1) {
            stack.push([row - 1, col])
            grid[row - 1][col] = 0;
        }

        if (row + 1 < grid.length && grid[row + 1][col] === 1) {
            stack.push([row + 1, col])
            grid[row + 1][col] = 0;
        }

        if (col - 1 >= 0 && grid[row][col - 1] === 1) {
            stack.push([row, col - 1]);
            grid[row][col - 1] = 0;
        }

        if (col + 1 < grid[row].length && grid[row][col + 1] === 1) {
            stack.push([row, col + 1])
            grid[row][col + 1] = 0;
        }
    }

    return count;
}