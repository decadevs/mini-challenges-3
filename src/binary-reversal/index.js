/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let binaryNum = parseInt(value);
  let binary = binaryNum.toString(2);
  let padded = binary.padStart(8, "0");
  let reversed = padded.split("").reverse().join("");
  let result = parseInt(reversed, 2);
  let finalResult = result.toString();
  return finalResult;
}

module.exports = binaryReversal;
