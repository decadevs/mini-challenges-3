function listSorting(needle, haystack) {
  let rowIndex = [];
  let colIndex= [];
  let index = [];

  if (haystack.length == 0) {
    return -1;
  }

  for (let i = 0; i < haystack.length; i++) {
    if (
      Array.isArray(haystack[i]) === true &&
      haystack[i].indexOf(needle) > -1
    ) {
      rowIndex.push(i);
      colIndex.push(haystack[i].lastIndexOf(needle));
    } else {
      index.push(haystack.lastIndexOf(needle));
    }
  }

  if (rowIndex.length > 1 && colIndex.indexOf(-1) === -1) {
    return [
      rowIndex[rowIndex.length - 1],
      colIndex[colIndex.length - 1],
    ];
  }
  if (rowIndex.length === 1 && colIndex.indexOf(-1) === -1) {
    return [
      rowIndex[rowIndex.length - 1],
      colIndex[colIndex.length - 1],
    ];
  }
  if (
    rowIndex.length === 0 &&
    colIndex.length === 0 &&
    index.length > 0
  ) {
    return index[index.length - 1];
  }

  return -1;
}

module.exports = listSorting;
