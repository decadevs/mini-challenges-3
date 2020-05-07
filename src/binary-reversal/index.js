/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let numValue = Number(value);
// convert to binary
  let binaryValue = numValue.toString(2);
// padded to 8 bit
  let paddedValue  = binaryValue.padStart(8, 0);
// reverse the padded value
  let reversedValueArray = paddedValue.split('').reverse();
//convert reversed value to decimal
  let decimalvalue = parseInt(reversedValueArray.join(''), 2);
  return decimalvalue;
}


module.exports = binaryReversal;
