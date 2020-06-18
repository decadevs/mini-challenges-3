/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let binaryValue = parseInt(value).toString(2);
  let binaryArray = binaryValue.padStart(8,0).split("")

  const newString = binaryArray.reverse().join("");

  const newValue = parseInt(newString, 2).toString();

  return newValue;
}

module.exports = binaryReversal;
