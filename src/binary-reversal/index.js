/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  const VALUE_TO_BINARY = parseInt(value).toString(2);
  let reversedBinaryArray = VALUE_TO_BINARY.split("").reverse();
  if (reversedBinaryArray.length % 8 === 0) {
    const REVERSED_BINARY_STRING = reversedBinaryArray.join("");
    return parseInt(REVERSED_BINARY_STRING, 2).toString();
  } else {
    for (let i = 0; i < reversedBinaryArray.length % 8; ++i) {
      reversedBinaryArray.push("0");
    }
    const REVERSED_BINARY_STRING = reversedBinaryArray.join("");
    return parseInt(REVERSED_BINARY_STRING, 2).toString();
  }
}

module.exports = binaryReversal;
