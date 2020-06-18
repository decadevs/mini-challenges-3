/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let decimalToBinary = parseInt(value, 10).toString(2)
  while(decimalToBinary.length < 8) {
    decimalToBinary = "0" + decimalToBinary
  }
  let reversedString = decimalToBinary.split("").reverse().join("")
  let binaryToDecimal = (parseInt(reversedString, 2)).toString()
  return binaryToDecimal
}

module.exports = binaryReversal;
