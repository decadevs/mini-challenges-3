/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  const binVal = Number(value).toString(2);
  const binValArr = binVal.split("");
  while (binValArr.length < 8) {
    binValArr.unshift("0");
  }
  return parseInt(binValArr.reverse().join(""), 2).toString();
}

module.exports = binaryReversal;
