/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let binaryValue = parseInt(value, 10).toString(2);

  while (binaryValue.length < 8) {
    binaryValue = "0" + binaryValue;
  }

  const reverseBinaryValue = binaryValue.split("").reverse().join("");

  const result = parseInt(reverseBinaryValue, 2).toString();

  return result;
}

module.exports = binaryReversal;
