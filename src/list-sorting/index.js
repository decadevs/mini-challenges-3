function listSorting(needle, haystack) {
  const arrLength = haystack.length;
  const answersArray = [];
  if (typeof haystack[0] == "object") {
    for (let i = 0; i < arrLength; i++) {
      haystack[i].lastIndexOf(needle) !== -1 &&
        answersArray.push([i, haystack[i].lastIndexOf(needle)]);
    }
    if (answersArray.length === 0) {
      return -1;
    } else if (answersArray.length === 1) {
      return answersArray[0];
    } else {
      return answersArray[answersArray.length - 1];
    }
  } else {
    if (haystack.lastIndexOf(needle) !== -1) {
      return haystack.lastIndexOf(needle);
    } else {
      return -1;
    }
  }
}

module.exports = listSorting;
