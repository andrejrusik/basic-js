const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (!(date instanceof Date) || Object.keys(date).length > 0) {
    throw new Error("Invalid date!");
  }

  // if (Object.prototype.toString.call(date) !== "[object Date]") {
  //   throw new Error("Invalid date!");
  // }

  switch (date.getMonth()) {
    case 0:
    case 1:
    case 11:
      return "winter";
    case 2:
    case 3:
    case 4:
      return "spring";
    case 5:
    case 6:
    case 7:
      return "summer";
    case 8:
    case 9:
    case 10:
      return "autumn";
  }
  console.log(Object.prototype.toString.call(date) === "[object Date]");
}

// const fakeDate = {
//   toString() {
//       return Date.prototype.toString.call(new Date());
//   },
//   [Symbol.toStringTag]: 'Date'
// };

// Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

// getSeason(new Date(2150, 7, 21, 18, 36, 41, 841));
module.exports = {
  getSeason,
};
