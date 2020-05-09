/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let base2val = convToBaseTwo(value);
  let decOfVal = reverseAndCovertToDecimal(base2val);
  return decOfVal;
}

function convToBaseTwo(value,base = 2){
  value = parseInt(value);
  let stack = []; let result="";

  while(value !== 0){
    let rem = value%base;
    stack.push(rem);
    value = Math.floor(value / base);
  }

  //Add Extra Values to make 8 digit
    while(stack.length < 8){
      stack.push(0);
    }

  //Get the Digit out of stack to a string
    while(stack.length){
      result += stack.pop();
    }
  return result;
}

function reverseAndCovertToDecimal(number,base = 2){
  let counter = 0; let decimal = 0;
  number = number.split("").reverse("").join("");
  for(let i = number.length-1; i >= 0; i--){
    decimal += Number(number[i])*(base**counter);
    counter++;
  }
  return decimal.toString();
}


module.exports = binaryReversal;
