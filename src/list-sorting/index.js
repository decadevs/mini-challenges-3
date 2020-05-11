function listSorting(needle, haystack) {
  if (Array.isArray(haystack[0])) {
    let result = [];
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i].includes(needle)) {
        result.push(i, haystack[i].lastIndexOf(needle));
      }
    }
    return result.length ? result.slice(result.length - 2) : -1;
  }
  return haystack.lastIndexOf(needle);
}

module.exports = listSorting;
