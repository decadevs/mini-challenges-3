/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
let num = parseInt(value)
  let binaryNum = num.toString(2)

  let paddedNum = binaryNum.padStart(8, "0")
  let reversedNum = paddedNum.split('').reverse().join("")

  return parseInt(reversedNum, 2).toString()
}


module.exports = binaryReversal;
