/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let num = +value;
  let binaryNum = num.toString(2).padStart(8, 0);

  binaryNum = binaryNum.split("").reverse().join("");

  binaryNum = parseInt(binaryNum, 2).toString();

  return `${binaryNum}`;
}
module.exports = binaryReversal;
