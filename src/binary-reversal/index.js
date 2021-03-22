/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let valueToBinary = parseInt(value).toString(2);
  while (valueToBinary.length < 8) {
    valueToBinary = '0' + valueToBinary;
  }
  let reverseBinary = valueToBinary.split("").reverse().join("");
  return parseInt(reverseBinary, 2).toString();
}

module.exports = binaryReversal;
