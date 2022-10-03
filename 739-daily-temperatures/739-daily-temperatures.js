/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [[0, 0]]; // [index, temperature];

    for (let i = temperatures.length - 1; i >= 0; i--) {
        while (stack.length > 1 && temperatures[i] >= stack.at(-1)[1]) {
            stack.pop();
        }

        let temp = temperatures[i];
        if (stack.at(-1)[1] === 0) {
            temperatures[i] = 0;
        } else {
            temperatures[i] = stack.at(-1)[0] - i; // substract the index of the next max with current index
        }

        if (i > 0 && temp > temperatures[i - 1]) {
            stack.push([i, temp]);
        }
    }

    return temperatures;
};