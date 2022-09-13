function binaryReversal(value) {
    let num = parseInt(value);
    let binaryNum = num.toString(2);

    let padded = binaryNum.padStart(8,0);
    let reversed = padded.split('').reverse().join('');
    let binaryToDecimal = parseInt(reversed,2);
    
     return binaryToDecimal.toString();  
}
module.exports = binaryReversal;
