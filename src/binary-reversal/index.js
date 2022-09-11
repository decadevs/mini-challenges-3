/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    //convert to binary
    let bin= (parseInt(value).toString(2));
    //create a string of 0* padding length
    let pad= ("0".repeat(8- bin.length));
    bin= pad + bin;
    //reverse string
    bin= bin.split("").reverse().join("");
    //convert back to binary
    bin = parseInt(bin, 2)
    // convert back to string
    return bin.toString();
}

module.exports = binaryReversal;
