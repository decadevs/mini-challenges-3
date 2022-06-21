/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
 function binaryReversal(value) {
  let strNum = Number(value)
  let binaryNum = strNum.toString(2)
  let padedNum = binaryNum.padStart(8,0);
  let reversedNum = padedNum.split('').reverse().join('')
let result = parseInt(reversedNum,2)
return result.toString()
}

module.exports = binaryReversal;
