/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let num = parseInt(value);
  let BinaReversal = num.toString(2).padStart(8, 0).split('').reverse('').join('');
  let finalReversal = parseInt(BinaReversal, 2)
  let output = `${finalReversal}`
  return output
}

module.exports = binaryReversal;
