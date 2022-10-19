/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    if (!heights.length) {
        return [[]];
    }

    let nbRows = heights.length;
    let nbCols = heights[0].length;

    let dfs = function (grid, visited, row, col) {
        if (!isValid(row, col)) return;
        if (visited[row][col]) return;

        visited[row][col] = true;

        if (isValid(row + 1, col) && heights[row + 1][col] >= heights[row][col]) {
            dfs(grid, visited, row + 1, col);
        }

        if (isValid(row - 1, col) && heights[row - 1][col] >= heights[row][col]) {
            dfs(grid, visited, row - 1, col);
        }

        if (isValid(row, col + 1) && heights[row][col + 1] >= heights[row][col]) {
            dfs(grid, visited, row, col + 1)
        }

        if (isValid(row, col - 1) && heights[row][col - 1] >= heights[row][col]) {
            dfs(grid, visited, row, col - 1)
        }

    }

    let isValid = (row, col) => {
        return row >= 0 && row < nbRows && col >= 0 && col < nbCols;
    }

    let atlantic = Array(nbRows).fill(false).map(() => { return Array(nbCols).fill(false) });
    let pacific = Array(nbRows).fill(false).map(() => { return Array(nbCols).fill(false) });

    for (let row = 0; row < nbRows; row++) {
        dfs(heights, pacific, row, 0); // all rows starting from the left = pacific connection
        dfs(heights, atlantic, row, nbCols - 1); // all rows starting from the right = atlantic connection
    }

    for (let col = 0; col < nbCols; col++) {
        dfs(heights, pacific, 0, col); // all cols starting from the top = pacific connection
        dfs(heights, atlantic, nbRows - 1, col);
    }

    let ans = [];
    for (let row = 0; row < nbRows; row++) {
        for (let col = 0; col < nbCols; col++) {
            if (pacific[row][col] && atlantic[row][col]) {
                ans.push([row, col]);
            }
        }
    }

    return ans;

};