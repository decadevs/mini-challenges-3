/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
 function binaryReversal(value) {

    let t = value.toString(2).split("");
    let str_len = t.length;
    for (let i = 0; i < 8 - str_len; i++) {
        t.unshift("0");
    }
    return parseInt(t.reverse().join(""), 2);
}
// 14 -> 00001110 -> 01110000 -> 112
console.log(binaryReversal(121));


module.exports = binaryReversal;
