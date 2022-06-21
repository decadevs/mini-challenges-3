/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    const valueNum = Number(value);
    console.log(valueNum);

    const binary = valueNum.toString(2)
    console.log(typeof binary);
    let reverseBinary = binary.split('').reverse().join('');

    while (reverseBinary.length < 8) {
        reverseBinary += 0;
    }
    console.log(reverseBinary);

    const outputValue = parseInt(reverseBinary, 2);
    console.log(typeof outputValue);
    return outputValue.toString();
}
console.log(binaryReversal('47'));

module.exports = binaryReversal;
