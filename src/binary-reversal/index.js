/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    let remainder = 0;
    const bin = [];
    while (value != 0) {
        remainder = parseInt(value % 2)
        value = parseInt(value) / 2
        bin.push(remainder)
    }

    while (bin.length < 8) {
        bin.push(0)
    }
    while (bin.length > 8) {
        bin.pop()
    }
    bin.reverse()
     //convert back to decimal

    const result = bin.map((num, n) => (num * 2 ** n)).reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    })
    
    return result.toString()
}

module.exports = binaryReversal;
