/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  if (typeof value !== "string" || value instanceof String || !value) {
    return value;
  }
  let answer = [];
  let cal = (a) => {
    let num = a / 2;
    let frac = Math.round(num % 1);
    answer.push(frac);
    if (num >= 1) {
      cal(num);
    }
  };
  cal(value);

  let i = answer.length;
  while (i < 8) {
    answer.push(0);
    i++;
  }

  return (binary = parseInt(answer.join(""), 2).toString());
}

module.exports = binaryReversal;
