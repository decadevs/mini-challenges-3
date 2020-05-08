/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let number = Number(value);
  const remainder = [];

  while (number > 0) {
    if (number === 1) {
      remainder.push(1);
      number--;
    } else {
      remainder.push(number % 2);
      number = Math.floor(number / 2);
    }
  }

  while (remainder.length < 8) {
    remainder.push(0);
  }

  let iteration = 0;
  let decimal = 0;

  while (iteration < 8) {
    decimal += remainder[iteration] * 2 ** (7 - iteration);
    iteration++;
  }
  return decimal.toString();
}

module.exports = binaryReversal;
