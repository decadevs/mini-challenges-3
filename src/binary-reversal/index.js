/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  value = Number(value);
  let newValue = (value >>> 0).toString(2);

  newValue = newValue.split('');

  for (let i = 0; i < 8; i++){
    if (newValue.length < 8){
      newValue.unshift('0');
    }
  }
  newValue = newValue.reverse().join('');
  let digit = parseInt(newValue, 2);
  digit = String(digit)
  return digit
}

module.exports = binaryReversal;
