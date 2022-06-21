/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    let val = parseInt(value)
  let binNum = val.toString(2)

  let padNum = binNum.padStart(8, 0)
  let revNum = padNum.split('').reverse().join('')

  let result = parseInt(revNum, 2)
  return `${result}`
}

module.exports = binaryReversal;
