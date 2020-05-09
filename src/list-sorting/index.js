function listSorting(needle, haystack) {
  // Initialize the needle position
  let needlePos;
  let flattnendArr = haystack.flat();

  //   Check if the haystack is empty or does not contain the needle.
  if (flattnendArr.length === 0 || flattnendArr.indexOf(needle) == -1) {
    needlePos = -1;
  }
  for (let i = 0; i < haystack.length; i++) {
    //   If the aray is not nested
    if (!Array.isArray(haystack[0]) && haystack[i] === needle) {
      needlePos = i;
    }
    //   If the aray is nested
    for (let j = 0; j < haystack[i].length; j++) {
      if (Array.isArray(haystack[0]) && haystack[i][j] === needle) {
        needlePos = [i, j];
      }
    }
  }

  return needlePos;
}

module.exports = listSorting;
