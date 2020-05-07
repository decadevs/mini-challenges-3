/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {

  let binaryValue = Number(value).toString(2);

  while (binaryValue.length < 8) {
    binaryValue = '0' + binaryValue;
  }

  return parseInt(binaryValue.split('').reverse().join(''), 2).toString();

}

module.exports = binaryReversal;
