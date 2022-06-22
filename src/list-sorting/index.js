function listSorting(needle, haystack) {
  // if the first element of the array is not an array, return the last index of the array.
  if (!Array.isArray(haystack[0])) {
    return haystack.lastIndexOf(needle);
  }

  //
  for (let i = haystack.length - 1; i >= 0; i--) {
    let col = haystack[i].lastIndexOf(needle);
    if (col != -1) {
      return [i, col];
    }
  }
  return -1;
}

module.exports = listSorting;
