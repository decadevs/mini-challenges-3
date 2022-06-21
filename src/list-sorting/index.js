function listSorting(needle, haystack) {
  let lastIdx, idx;
  if (typeof haystack[0] != "object") {
    return haystack.lastIndexOf(needle);
  } else {
      for (let i = haystack.length -1; i >= 0; i--) {
        idx = haystack[i];
        lastIdx = idx.lastIndexOf(needle);
        if (haystack.length !== -1) {
          return [i, lastIdx];
        }
      }
      return -1;
  }
}

module.exports = listSorting;
