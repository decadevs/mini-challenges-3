function listSorting(needle, haystack) {
 let ret = -1;

  if (typeof haystack[0] == "array" || typeof haystack[0] == "object") {
    // its multi-dimentional
    // let row = -1,
      col = -1;
    for (let index = 0; index < haystack.length; index++) {
      if (haystack[index].lastIndexOf(needle) >= 0) {
        row = index;
        col = haystack[index].lastIndexOf(needle);
      }
    }
    if (col >= 0 && row >= 0) ret = [row, col];
  } else {
    // its single dimensional
    ret = haystack.lastIndexOf(needle);
  }
  return ret;
}

module.exports = listSorting;
