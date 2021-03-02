/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    let num = parseInt(value);
    let binaryNum = num.toString(2);

    for (let i = 8-binaryNum.length; i > 0; i--) {
        binaryNum = "0"+binaryNum;
    }

    let reversedBinaryNum = "";

    for (let i= binaryNum.length -1; i>=0; i--){
        reversedBinaryNum += binaryNum[i];
    }
    return parseInt(reversedBinaryNum, 2).toString();
}

module.exports = binaryReversal;
