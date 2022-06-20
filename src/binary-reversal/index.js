/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value)
{
  const num = parseInt(value);
  let binaryStr = num.toString(2);

  if (binaryStr.length % 8 !== 0)
  {
    const fullLength = 8 - (binaryStr.length % 8) + binaryStr.length;
    binaryStr = binaryStr.padStart(fullLength, '0');
  }

  const reversed = binaryStr.split('').reverse().join('');
  return String(parseInt(reversed, 2));
}

module.exports = binaryReversal;
