/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
const binaryReversal = (value) => {
    if (typeof value !== "string") {
        return value;
      }
      let answer = [];
      const calculator = (input) => {
        let number = input / 2;
        let frac = Math.round(number % 1);
        answer.push(frac);
        if (number >= 1) {
          calculator(number);
        }
      };
      calculator(value);
    
      let i = answer.length;
      while (i < 8) {
        answer.push(0);
        i++;
      }
    
      return parseInt(answer.join(""), 2).toString();


}

module.exports = binaryReversal;
