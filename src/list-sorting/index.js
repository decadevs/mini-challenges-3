function listSorting(needle, haystack) {
  if (typeof haystack[0] !== "object") {
    return haystack.lastIndexOf(needle);
  }
  for (let i = haystack.length - 1; i >= 0; --i) {
    if (haystack[i].includes(needle)) {
      return [i, haystack[i].lastIndexOf(needle)];
    }
  }
  return -1;
}

module.exports = listSorting;
