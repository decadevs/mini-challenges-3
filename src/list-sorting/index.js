function listSorting(needle, haystack) {
  let json = haystack;
  let row = haystack.length - 1;
  // check if  array is flat
  if (JSON.stringify(json)[1] !== "[") {
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
