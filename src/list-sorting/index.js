function listSorting(needle, haystack) {
  if (haystack.length === 0) {
    return -1;
 }
 else if (haystack[0].constructor !== Array) {
    let possibleIndex = haystack.lastIndexOf(needle);
    return possibleIndex;
 }
 else {
    let possibleIndex =  [];
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i].indexOf(needle) !== -1) {
        possibleIndex.push([i,haystack[i].lastIndexOf(needle)]);
      }
    }
    if (possibleIndex.length === 0) {
      return -1;
    }
    else {
      let realIndex = possibleIndex[possibleIndex.length-1];
      return realIndex;
    }
 }
}

module.exports = listSorting;
