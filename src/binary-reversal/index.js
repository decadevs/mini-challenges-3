/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let num = parseInt(value);
  let binaryNumber = num.toString(2)

  let padNum = binaryNumber.padStart(8,0)
  let reverseNum = padNum.split('').reverse().join('')

  let output = parseInt(reverseNum, 2)
  return `${output}`

}

console.log(binaryReversal('213'))
module.exports = binaryReversal;
