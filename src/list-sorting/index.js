function listSorting(needle, haystack) {
  let row = haystack.length - 1;
  // for flat haystack array
  if (typeof haystack[0] !== "object") {
    return haystack.lastIndexOf(needle);
  }
  //multidimension array
  for (let i = row; i >= 0; i--) {
    if (haystack[i].lastIndexOf(needle) !== -1)
      return new Array(i, haystack[i].lastIndexOf(needle));
  }
  return -1;
}

module.exports = listSorting;
