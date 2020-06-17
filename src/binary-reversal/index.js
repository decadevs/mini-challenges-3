/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  //OPTIMSE MY CODE TO BE JAVASCRIPT
  if(typeof value !== 'string') throw TypeError('Enter a valid Entry');
  const inputBase = 10; const outputBase = 2;
  const decimalEquiv = parseInt(parseInt(value, inputBase)
  .toString(outputBase)
  .padStart(8,'0')
  .split("")
  .reverse()
  .join(""),outputBase)
  .toString(10);
  return decimalEquiv;
}

module.exports = binaryReversal;
