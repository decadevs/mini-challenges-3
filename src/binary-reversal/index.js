/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let rem = Number(value);
  let binary = '';
  let decimal = 0;

  while (rem > 0) {
    binary += rem % 2;
    rem = Math.trunc(rem / 2);
  }

  while(binary.length < 8) {
    binary += '0';
  }

  binary = binary.split('').reverse().join('');
  
  for (let i = 0; i < binary.length; i++) {
    decimal += binary[i] * (2 ** i);
  }

  return String(decimal);
}

module.exports = binaryReversal;
