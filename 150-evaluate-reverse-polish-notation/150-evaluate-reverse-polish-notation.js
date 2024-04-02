/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  for (let token of tokens) {
    let number = parseInt(token);
    if (isNaN(number)) {
      let second = stack.pop();
      let first = stack.pop();
      let result;
      if (token === "+") {
        result = first + second;
      } else if (token === "-") {
        result = first - second;
      } else if (token === "*") {
        result = first * second;
      } else if (token === "/") {
        result = Math.trunc(first / second);
      }
      stack.push(result);
    } else {
      stack.push(number);
    }
  }

  return stack.pop();
};

let tokens = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
];

console.log(evalRPN(tokens));
