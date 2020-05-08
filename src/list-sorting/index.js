function listSorting(needle, haystack) {
  if (!haystack || !Array.isArray(haystack)) {
    throw Error('Please provide a valid haystack')
  }

  if (!Array.isArray(haystack[0])) {
    return haystack.lastIndexOf(needle);
  }

  let answer = [];
  let index = haystack.length - 1;
  for (index; index > -1; index--) {
    if (haystack[index].includes(needle)) {
      answer.push(index, haystack[index].lastIndexOf(needle));
      return answer;
    }
  }
  return -1;
}

module.exports = listSorting;
