function listSorting(needle, haystack) {

  let resultArr = [];

  if (haystack.every((item) => Array.isArray(item))) {
    for (let i = haystack.length - 1; i >= 0; i--) {
      for (let j = 0; j < haystack[i].length; j++) {
        if (resultArr.length === 0 && haystack[i][j] === needle) {
          resultArr.push(i, j);
        }
      }
    }
    return resultArr.length === 0 ? -1 : resultArr;
  } 
  else {
    for (let i = haystack.length - 1; i >= 0; i--) {
      if (resultArr.length === 0 && haystack[i] === needle) {
        resultArr.push(i);
      }
    }
    return resultArr.length === 0 ? -1 : resultArr[0];
  }
}

module.exports = listSorting;
