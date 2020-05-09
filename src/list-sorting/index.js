function listSorting(needle, haystack) {
  let result = [];
  if (typeof(haystack[0]) === 'number') {
    if (haystack.includes(needle)) {
      for (let col = haystack.length - 1; col >= 0; col--) {
        if (haystack[col] === needle) {
          return col;
        }
      }
    } else {
      return -1;
    }
  } else {
    for (let row = 0; row < haystack.length; row++) {
      if (haystack[row].includes(needle)) {
        result.shift();
        result.unshift(row);
        for (let col = haystack[row].length - 1; col >= 0; col--) {
          if (haystack[row][col] === needle) {
            result[1] = col;
            break;
          }
        }
      }
    }
  }
  return result.length < 2 ? -1 : result;
}

module.exports = listSorting;
