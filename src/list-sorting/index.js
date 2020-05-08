function listSorting(needle, haystack) {
  // Iterating backwards through haystack
  for (let item = haystack.length - 1; item >= 0; item--) {
    if (Array.isArray(haystack[item])) {
      // finding and returning column and row values if there is a match
      if (haystack[item].lastIndexOf(needle) > -1) {
        return [item, haystack[item].lastIndexOf(needle)];
      }
    }
  }

  // returning a match if there is no array
  return haystack.lastIndexOf(needle);
}

module.exports = listSorting;
