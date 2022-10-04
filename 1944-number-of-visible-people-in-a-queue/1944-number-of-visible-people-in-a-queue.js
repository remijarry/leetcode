/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
    let stack = [];
    let ans = Array(heights.length).fill(0);

    for (let i = heights.length - 1; i >= 0; i--) {
        if (stack.length && stack.at(-1) > heights[i]) {
            ans[i] = 1;
        }
        else {
            let visible = 0;
            while (stack.length && heights[i] > stack.at(-1)) {
                stack.pop();
                visible++;
            }

            if (stack.length) {
                ans[i] = visible + 1;
            } else {
                ans[i] = visible;
            }


        }

        stack.push(heights[i]);
    }

    return ans;
};