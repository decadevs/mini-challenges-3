function listSorting(needle, haystack) {
  let rowIndexOfNeedle = [];
  let colIndexOfNeedle = [];
  let indexOfNeedle = [];

  if (haystack.length == 0) {
    return -1;
  }

  for (var i = 0; i < haystack.length; i++) {
    if (
      Array.isArray(haystack[i]) === true &&
      haystack[i].indexOf(needle) > -1
    ) {
      rowIndexOfNeedle.push(i);
      colIndexOfNeedle.push(haystack[i].lastIndexOf(needle));
    } else {
      indexOfNeedle.push(haystack.lastIndexOf(needle));
    }
  }

  if (rowIndexOfNeedle.length > 1 && colIndexOfNeedle.indexOf(-1) === -1) {
    return [
      rowIndexOfNeedle[rowIndexOfNeedle.length - 1],
      colIndexOfNeedle[colIndexOfNeedle.length - 1],
    ];
  }
  if (rowIndexOfNeedle.length === 1 && colIndexOfNeedle.indexOf(-1) === -1) {
    return [
      rowIndexOfNeedle[rowIndexOfNeedle.length - 1],
      colIndexOfNeedle[colIndexOfNeedle.length - 1],
    ];
  }
  if (
    rowIndexOfNeedle.length === 0 &&
    colIndexOfNeedle.length === 0 &&
    indexOfNeedle.length > 0
  ) {
    return indexOfNeedle[indexOfNeedle.length - 1];
  }

  return -1;
}

module.exports = listSorting;
