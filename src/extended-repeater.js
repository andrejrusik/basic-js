const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let stringEntre = str;
  const optionsEntre = {
    // repeatTimes: options.repeatTimes,
    addition: options.addition,
    // additionRepeatTimes: options.additionRepeatTimes,
    // separator: options.separator,
    // additionSeparator: options.additionSeparator,
  };

  optionsEntre.separator = options.separator || "+";
  optionsEntre.additionSeparator = options.additionSeparator || "|";
  optionsEntre.repeatTimes = options.repeatTimes || 1;
  optionsEntre.additionRepeatTimes = options.additionRepeatTimes || 1;

  let res = "";

  for (let string = 0; string < optionsEntre.repeatTimes; string++) {
    res += stringEntre;
    if (optionsEntre.addition !== undefined) {
      for (
        let addition = 0;
        addition < optionsEntre.additionRepeatTimes;
        addition++
      ) {
        res += optionsEntre.addition + optionsEntre.additionSeparator;
      }
      if (res.lastIndexOf(optionsEntre.additionSeparator) !== -1) {
        res = res.substring(0, res.lastIndexOf(optionsEntre.additionSeparator));
      }
    }
    res += optionsEntre.separator;
  }
  if (res.lastIndexOf(optionsEntre.separator) !== -1) {
    res = res.substring(0, res.lastIndexOf(optionsEntre.separator));
  }
  console.log(res);
  return res;
}

module.exports = {
  repeater,
};
