/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  var number = parseInt(value)
  var binaryNumber = number.toString(2)

  var joinNum = binaryNumber.padStart(8, 0)
  var reversedNum = joinNum.split('').reverse().join('')

  var result = parseInt(reversedNum, 2)
  return `${result}`
}

module.exports = binaryReversal;
