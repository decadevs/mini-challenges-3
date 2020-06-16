
function binaryReversal(value) {
    let binary1 =parseInt(value,10).toString(2);
    while(binary1.length !=8){
        binary1= "0" + binary1;
    }
    return parseInt((binary1).split("").reverse().toString().replace(/,/g,""),2).toString();
}

module.exports = binaryReversal;
