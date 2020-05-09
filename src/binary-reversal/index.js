/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  value = Number(value);
  let valueBinary = value.toString(2);
  valueBinary = '00000000'.substr(valueBinary.length) + valueBinary;
  let reverseValueBinary = valueBinary.split('').reverse().join('')
  return parseInt(reverseValueBinary, 2).toString();
}

module.exports = binaryReversal;
