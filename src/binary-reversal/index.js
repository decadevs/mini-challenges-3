/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
 function binaryReversal(value) {

  let numberValue = Number(value).toString(2).padStart(8, 0).split('').reverse().join("");
  let result = parseInt(numberValue, 2).toString();
  return result;
 }

module.exports = binaryReversal;
