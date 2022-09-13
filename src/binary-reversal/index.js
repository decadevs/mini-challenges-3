/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    /**
     * 
     * 
     * 
     */
    let binaryNum = (parseInt(value).toString(2));
    let padding = ("0".repeat(8- binaryNum.length));
    binaryNum = padding + binaryNum;
    binaryNum = binaryNum.split("").reverse().join("");
    binaryNum = parseInt(binaryNum, 2)

    return binaryNum.toString();
}


console.log(binaryReversal("10"));

module.exports = binaryReversal;
