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

// throw new NotImplementedError('Not implemented');
function deleteDigit(n) {
  // remove line with error and write your code here
  let nArr = ("" + n).split("");

  for (let i = 0; i < nArr.length - 1; i++) {
    if (nArr[i] < nArr[i + 1]) {
      nArr.splice(nArr.indexOf(nArr[i]), 1);
      return nArr.join("") * 1;
    }
  }
  nArr.splice(nArr.length - 1, 1);
  return nArr.join("") * 1;
}

module.exports = {
  deleteDigit,
};
