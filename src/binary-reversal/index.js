/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value)
{
    let num = parseInt(value);
    let binaryStr = num.toString(2);
    let bitArr = binaryStr.split('');

    if (bitArr.length % 8 !== 0)
    {
        let missingBits = 8 - (bitArr.length % 8);
        let leadingZeros = new Array(missingBits).fill('0');
        bitArr = leadingZeros.concat(bitArr);
    }

    let reversed = bitArr.reverse().join('');
    return String(parseInt(reversed, 2));
}

module.exports = binaryReversal;
