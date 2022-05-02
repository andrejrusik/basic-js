const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  counter = 1;

  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let arrs = arr.filter((el) => Array.isArray(el));
    return arrs.length === 0 ? this.counter : this.counter + this.calculateDepth(arrs.flat());
  }
}

const depthCalc = new DepthCalculator();
// depthCalc.calculateDepth([1, 2, 3, 4, 5]); //=> 1
 depthCalc.calculateDepth([1,[ [2], 3], [1], 4, 5, [1]])// => 2
//  depthCalc.calculateDepth([[[]]])// => 3/

module.exports = {
  DepthCalculator,
};
