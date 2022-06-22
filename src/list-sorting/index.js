function listSorting(needle, haystack) {
  let lastIdx, idx, res = -1;
  if (Array.isArray(haystack[0])) { //Checks if haystack is an array of an array
    for (let i = 0; i < haystack.length; i++) {
      idx = haystack[i];
      lastIdx = idx.lastIndexOf(needle)
      if (lastIdx > -1) { //Fetches the result
        res = [i, lastIdx];
      }
    }
    return res;
  } else {
      return haystack.lastIndexOf(needle);
  }
}

module.exports = listSorting;
