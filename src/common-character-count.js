const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const s1Arr = s1.split("");
  const s2Arr = s2.split("");
  let counter = 0;

  for (const elS1 of s1Arr) {
    if (s2Arr.indexOf(elS1) !== -1) {
      counter++;
      s2Arr.splice(s2Arr.indexOf(elS1), 1);
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount,
};
