/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  const PAD = 8;
  return parseInt(
    parseInt(value).toString(2).padStart(PAD, "0").split("").reverse().join(""),
    2
  ).toString();
}
module.exports = binaryReversal;
