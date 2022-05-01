const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = "";
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else {
      ++counter;
      counter > 1 ? (res = res + counter + str[i]) : (res = res + str[i]);
      counter = 0;
    }
  }
  return res;
}
module.exports = {
  encodeLine,
};
