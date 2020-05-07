/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let binaryValue = parseInt(value).toString(2);

  const binaryArray = binaryValue.split("");

  while (binaryArray.length % 8 !== 0) {
    binaryArray.unshift(0);
  }

  binaryArray.reverse();

  const newString = binaryArray.join("");

  const newValue = parseInt(newString, 2).toString();

  return newValue;
}

module.exports = binaryReversal;
