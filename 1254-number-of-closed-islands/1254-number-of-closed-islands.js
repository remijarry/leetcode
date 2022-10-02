/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {

    let count = 0;
    // dont check the borders as they can not be surrounded by water
    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid[i].length - 1; j++) {
            if (grid[i][j] === 0) {
                count += dfs(grid, i, j);
            }
        }
    }

    return count;
};

var dfs = function (grid, row, col) {
    let stack = [[row, col]];
    let island = 1;
    while (stack.length) {
        const [row, col] = stack.pop();
        if (row === 0 || row === grid.length - 1 || col === 0 || col === grid[row].length - 1) {
            island = 0;
        }
        grid[row][col] = 1;

        if (row - 1 < 0 || row + 1 === grid.length || col - 1 < 0 || col + 1 > grid[row].length) {
            continue;
        }


        if (grid[row + 1][col] === 0) {
            stack.push([row + 1, col]);
        }

        if (grid[row - 1][col] === 0) {
            stack.push([row - 1, col]);
        }

        if (grid[row][col + 1] === 0) {
            stack.push([row, col + 1])
        }

        if (grid[row][col - 1] === 0) {
            stack.push([row, col - 1])
        }
    }

    return island;
}