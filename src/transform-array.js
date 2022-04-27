const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(array) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let res = [];
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      if (
        arr[0] === "--discard-prev" ||
        arr[0] === "--double-prev" ||
        arr[arr.length - 1] === "--discard-next" ||
        arr[arr.length - 1] === "--double-next"
      ) {
        continue;
      } else {
        switch (arr[i]) {
          case "--discard-next":
            console.log("discard-next");
            if (
              arr[i + 2] === "--double-prev" ||
              arr[i + 2] === "--discard-prev"
            ) {
              arr.splice(i, 3);
            } else {
              arr.splice(i, 2);
            }
            break;
          case "--discard-prev":
            console.log("discard-prev");
            res.pop();
            arr.splice(arr[i], 1);
            break;
          case "--double-next":
            console.log("double-next");
            res.push(arr[i + 1]);
            arr.splice(arr[i], 1);
            break;
          case "--double-prev":
            console.log("double-prev");
            res.push(res[res.length - 1]);
            arr.splice(arr[i], 1);
            break;
        }
      }
    }
    res.push(arr[i]);
  }
  console.log(`res: ${res}`);
  return res;
}

module.exports = {
  transform,
};
