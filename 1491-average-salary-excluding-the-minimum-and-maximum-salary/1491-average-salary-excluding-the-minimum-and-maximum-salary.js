/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let minSalary = Number.MAX_VALUE;
    let maxSalary = Number.MIN_VALUE;
    let sum = 0;
    
    for(let i = 0; i < salary.length; i++) {
        sum += salary[i];
        minSalary = Math.min(minSalary, salary[i]);
        maxSalary = Math.max(maxSalary, salary[i]);
    }
    
    let nbSalaries = salary.length -2;
    return (sum - minSalary - maxSalary) / nbSalaries;
};