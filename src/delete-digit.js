const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  let length = n.toString().split("").length;

  for (let i = 0; i < length; i++) {
    let arr = n.toString().split("");
    arr.splice(i, 1);
    if (parseInt(arr.join("")) > max) max = parseInt(arr.join(""));
  }

  return max;
}

module.exports = {
  deleteDigit,
};
