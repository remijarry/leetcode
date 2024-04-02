var MinStack = function () {
  stack = [];
  min = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  stack.push(val);
  if (min.length === 0) {
    min.push(val);
  } else {
    if (val <= min.at(-1)) {
      min.push(val);
    }
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let popped = stack.pop();
  if (popped === min.at(-1)) {
    min.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return stack.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return min.at(-1);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
