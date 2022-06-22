/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {

    let binaryValue = Number(value).toString(2);
    let paddingLength = binaryValue.length % 8 === 0 ? 0 : 8 - binaryValue.length % 8
    let paddedReversedBinaryValue = [...Array(paddingLength).fill(0), ...binaryValue].reverse().join('');

  let parseIntValue = parseInt(paddedReversedBinaryValue,2);
  return parseIntValue.toString();

}

module.exports = binaryReversal;
