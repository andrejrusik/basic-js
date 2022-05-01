const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(text, code) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!text || !code) {
      throw Error("Incorrect arguments!");
    }
    const textUp = text.toUpperCase();
    const codeUp = code.toUpperCase();
    let res = "";
    let counter = 0;

    for (let i = 0; i < textUp.length; i++) {
      if (textUp[i].charCodeAt() < 65 || textUp[i].charCodeAt() > 90) {
        res += textUp[i];
      } else {
        res += String.fromCharCode(
          ((textUp[i].charCodeAt() +
            codeUp[counter % codeUp.length].charCodeAt()) %
            26) +
            65
        );
        counter++;
      }
    }

    return this.direct === true || this.direct === undefined
      ? res
      : res.split("").reverse().join("");
  }
  decrypt(text, code) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!text || !code) {
      throw Error("Incorrect arguments!");
    }
    const textUp = text.toUpperCase();
    const codeUp = code.toUpperCase();
    let res = "";
    let counter = 0;

    for (let i = 0; i < textUp.length; i++) {
      if (textUp[i].charCodeAt() < 65 || textUp[i].charCodeAt() > 90) {
        res += textUp[i];
      } else {
        res += String.fromCharCode(
          ((textUp[i].charCodeAt() -
            codeUp[counter % codeUp.length].charCodeAt() <
          0
            ? textUp[i].charCodeAt() -
              codeUp[counter % codeUp.length].charCodeAt() +
              26
            : textUp[i].charCodeAt() -
              codeUp[counter % codeUp.length].charCodeAt()) %
            26) +
            65
        );
        counter++;
      }
    }
    console.log(res);
    return this.direct === true || this.direct === undefined
      ? res
      : res.split("").reverse().join("");
  }
}
// console.log(String.fromCharCode(65));
// const directMachine = new VigenereCipheringMachine();
// directMachine.encrypt("attack at dawn!", "alphonse");
// directMachine.decrypt("AEIHQX SX DLLU!", "alphonse");
module.exports = {
  VigenereCipheringMachine,
};
