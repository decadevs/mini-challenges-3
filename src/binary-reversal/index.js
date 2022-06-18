/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value)
{
    let temp = parseInt(value);
    temp = temp.toString(2);    //binary representation
    temp = temp.split('');

    //pad bits if not complete bytes
    if (temp.length % 8 !== 0)
    {
        let missingBits = 8 - (temp.length % 8);
        let leadingZeros = new Array(missingBits).fill('0');
        temp = leadingZeros.concat(temp);
    }

    temp = temp.reverse().join('');
    return String(parseInt(temp, 2)); //get the result in decimal and cast to string
}

module.exports = binaryReversal;
