/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    let reversed = Number(value)
      .toString(2)
        .padStart(8, "0")
        .split('')
        .reverse().join('')

    return parseInt(reversed, 2).toString()
}

module.exports = binaryReversal;
