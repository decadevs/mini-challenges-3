/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */

 function binaryReversal(value) {
  // convert value to int
  value = parseInt(value);

  // convert decimal to binary
  value = (value >>> 0).toString(2);

  if (value.length % 8 != 0) {
    let pad = (parseInt(value.length / 8) + 1) * 8;
    let num = pad - value.length;

    for (let i = 0; i < num; i++) {
      value = "0" + value;
    }
  }

  value = value.toString();

  // reverse the string
  value = value.split("").reverse().join("");

  // convert to decimal
  value = parseInt(value, 2);

  return `${value}`;
}

module.exports = binaryReversal;
