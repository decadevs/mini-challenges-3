/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
  function binaryReversal(value) {
    let loop = Math.floor(value ** 0.5) + 1;
    let arr = [];
    for (let i = 0; i < loop; i++) {
      if (value > 1) {
        arr.push(value % 2);
        value = Math.floor(value / 2);
      } else if (value == 1) {
        arr.push(1);
        value = 0;
      }
    }
    let strNum = arr.join("");
    let length = strNum.length;

    let n8 = Math.ceil(length / 8);

    if (length < 8 * n8) {
      let diff = 8 * n8 - strNum.length;

      for (let i = 0; i < diff; i++) {
        strNum += "0";
      }
    }
    let newLength = strNum.length;

    let sumArray = [];
    for (let i = 0; i < newLength; i++) {
      let pow = newLength - 1 - i;
      let num = strNum[i];
      sumArray.push(num * 2 ** pow);
    }
    return sumArray.reduce((a, b) => a + b).toString();
  }

module.exports = binaryReversal;
