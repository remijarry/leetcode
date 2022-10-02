/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let ans = [];

    let connected = new Map();
    for (let i = 0; i < heights.length; i++) {
        for (let j = 0; j < heights[i].length; j++) {
            if (dfs(heights, i, j, connected)) {
                ans.push([i, j]);
                connected.set([i, j], true)
            }
        }
    }

    return ans;
};

var dfs = function (grid, row, col, connected) {
    let stack = [];
    stack.push([row, col]);

    let visited = [];

    for (let i = 0; i < grid.length; i++) {
        visited[i] = [];
        for (let j = 0; j < grid[i].length; j++) {
            visited[i].push(false);
        }
    }

    connectedToPacific = false;
    connectedToAtlantic = false;

    while (stack.length) {
        const [row, col] = stack.pop();

        if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || visited[row][col]) {
            continue;
        }

        visited[row][col] = true;

        if (connected.has([row, col])) {
            return true;
        }

        if (row === 0 || col === 0) {
            connectedToPacific = true;
        }

        if (row === grid.length - 1 || col === grid[row].length - 1) {
            connectedToAtlantic = true;
        }

        if (connectedToAtlantic && connectedToPacific) {
            return true;
        }

        if (row - 1 >= 0 && grid[row - 1][col] <= grid[row][col]) {
            stack.push([row - 1, col]);
        }

        if (row + 1 < grid.length && grid[row + 1][col] <= grid[row][col]) {
            stack.push([row + 1, col]);
        }

        if (col - 1 >= 0 && grid[row][col - 1] <= grid[row][col]) {
            stack.push([row, col - 1]);
        }

        if (col + 1 < grid[row].length && grid[row][col + 1] <= grid[row][col]) {
            stack.push([row, col + 1]);
        }

    }

    return false;
}