/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  const getBinary = (value) => {
    let arr = [];
    let dividingNum = value;
    let temp;

    while (dividingNum > 0) {
      temp = dividingNum % 2;
      dividingNum = Math.floor(dividingNum / 2);
      arr.push(temp);
    }
    return arr;
  };
  const appendVal = (arr) => {
    if (arr.length < 8) {
      appendNo = 8 - arr.length;
      for (let i = 0; i < appendNo; i++) {
        arr.push(0);
      }
      return arr;
    } else if (arr.length > 8) {
      return "value not catered to";
    } else {
      return arr;
    }
  };
  //reserveArray function
  function reverseArray(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
  }

  //new Array function
  const newArray = (arr) => {
    let newArr = [];
    let val;

    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i] * Math.pow(2, arr.length - (i + 1)));
    }

    val = newArr.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );

    return val;
    console.log(val);
  };

  //call individual functions

  const arrayToBeWorkedOn = getBinary(value);
  const appendedArray = appendVal(arrayToBeWorkedOn);
  const paddedArray = reverseArray(appendedArray);
  const finalVal = newArray(appendedArray);

  return finalVal.toString();
}

module.exports = binaryReversal;
