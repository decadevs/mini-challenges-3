function binaryReversal (str) {
    // code goes here  
    let num = parseInt(str);
    let binary = num.toString(2);
    let reverse = binary.split("").reverse().join("");
    let newNum = parseInt(reverse, 2);
    let final = newNum.toString(10);
    return final;
  }

    console.log(binaryReversal("47"));
    console.log(binaryReversal("213"));
    console.log(binaryReversal("4567"));

    module.exports = binaryReversal;
