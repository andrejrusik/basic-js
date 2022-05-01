const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chains: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chains.length;
  },
  addLink(value = "") {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chains.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (
      position <= 0 ||
      position > this.getLength() ||
      isNaN(position) ||
      !Number.isInteger(position)
    ) {
      this.chains.length = 0;
      throw new Error("You can't remove incorrect link!");
    }

    this.chains.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chains.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here;
    const result = this.chains.join(`~~`);
    this.chains.length = 0;
    return result;
  },
};

// const result = chainMaker
//   .addLink(1)
//   .addLink(2)
//   .reverseChain()
//   .addLink()
//   .addLink(4)
//   .removeLink(2.1)
//   .addLink(6)
//   .getLength();
// // .finishChain();
// console.log(result);
module.exports = {
  chainMaker,
};
