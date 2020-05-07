/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  const PAD = 8;
  const reversedBinary = parseInt(value)
    .toString(2)
    .padStart(PAD, "0")
    .split("")
    .reverse()
    .join("");
  return parseInt(reversedBinary, 2).toString();
}
module.exports = binaryReversal;
