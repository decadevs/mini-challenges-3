/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  return String(parseInt([...
    `0000000${Number(value).toString(2)}`.slice(-8)
].reverse().join(""), 2));

}

module.exports = binaryReversal;
