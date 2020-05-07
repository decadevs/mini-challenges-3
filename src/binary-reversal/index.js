/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let binaryValue = Number(value).toString(2);
  let lengthOfBinaryValue = binaryValue.length;

  if (lengthOfBinaryValue === 8) {
    return String(parseInt(
      binaryValue
        .split("")
        .reverse()
        .join(""),
      2
    ));
  }

  let lengthOfZeroToAdd = 8 - (lengthOfBinaryValue % 8);

  let reverseBinaryValue = binaryValue.split("").reverse().join("");

  let stringZeroToAdd = "0".repeat(lengthOfZeroToAdd);

  let reversedPaddedBinaryValue = reverseBinaryValue.concat(stringZeroToAdd);

  return String(parseInt(reversedPaddedBinaryValue, 2));
}

module.exports = binaryReversal;
