/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.prefixSum = [0];
    let i = 0;
    for(let num of nums) {
        this.prefixSum.push(num + this.prefixSum[i]);
        i++;
    }
    
    
    this.sumRange = function(left, right) {
        return this.prefixSum[right + 1] - this.prefixSum[left];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.sumRange(left, right);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */