/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let myNum = parseInt(value)
  let binaryNum = myNum.toString(2)

  let paddedNum = binaryNum.padStart(8, 0)
  let reversedNum = paddedNum.split('').reverse().join('')

  let result = parseInt(reversedNum, 2)
  return `${result}`
}

module.exports = binaryReversal;
