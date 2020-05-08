/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  //Converting value to a binary string
  let binaryValue = parseInt(value, 10).toString(2);

  // Adding zero if to make up length to 8
  while (binaryValue.length < 8) {
    binaryValue = "0" + binaryValue;
  }

  // reversing binary
  const reverseBinaryValue = binaryValue.split("").reverse().join("");

  // converting to decimal value
  const result = parseInt(reverseBinaryValue, 2).toString();

  return result;
}

module.exports = binaryReversal;
