/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
const binaryReversal = value => {
  const numberValue = +value
  let convertToBinary = numberValue.toString(2)

  let arrayOfBinary = convertToBinary.split('').reverse();

  while (arrayOfBinary.length % 8 !== 0) {
    arrayOfBinary.push(0)
  };

  convertToBinary = arrayOfBinary.join('')
  return String(Number.parseInt(convertToBinary, 2));
}


module.exports = binaryReversal;
