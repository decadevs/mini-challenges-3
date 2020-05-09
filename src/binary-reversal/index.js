/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  if (!value || value < 1 || typeof value !== 'string') {
    return value;
  }

  let integer = Number(value);
  let binaryArr = integer.toString(2).split('');
  let length = binaryArr.length;
  if (length > 8) {
    length %= 8;
  }
  let noOfPrefixZeros = 8 - length;
  let reverseArr = new Array(noOfPrefixZeros).fill('0');
  reverseArr = reverseArr.concat(binaryArr)
  reverseArr = reverseArr.reverse().join('');
  let reverseInteger = parseInt(reverseArr, 2);

  return reverseInteger.toString();
}

module.exports = binaryReversal;
