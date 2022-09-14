/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let binary = parseInt(value).toString(2);
  let paddedBinary =
    binary.length <= 8
      ? "0".repeat(8 - binary.length) + binary
      : "0".repeat(8 - (binary.length % 8)) + binary;
  let reversedPaddedBinary = paddedBinary.split("").reverse().join("");
  return parseInt(reversedPaddedBinary, 2).toString();
}
console.log(binaryReversal)
module.exports = binaryReversal;
