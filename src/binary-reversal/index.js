/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let x = parseInt(value);
    let binVal = x.toString(2)
    //pad if value !==8
    while(binVal.length !== 8) {
        let padString = '0';
        binVal = padString + binVal;
    }
    let reversed = [...binVal].reverse().join("");
    let result = parseInt(reversed, 2);

    return result.toString();
}

module.exports = binaryReversal;
