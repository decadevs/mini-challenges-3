function listSorting(needle, haystack){
if (typeof (haystack[0]) == "object") {
 let lastArray = -1;
  let lastIndex;
  
  for (let i = 0; i < haystack.length; i++) {

    if (haystack[i].includes(needle)) {
        lastArray = i;
        lastIndex = haystack[i].lastIndexOf(needle)

    }
  }
  if (lastArray != -1) {
    return [lastArray, lastIndex]
  } else {
    return -1
  }

}
else {
  return haystack.lastIndexOf(needle)
}
}

  // console.log(listSorting(5, [1, 2, 3, 4, 5]));

  // console.log(listSorting(5, [1, 2, 3, 4, 4, 4]))
  // console.log(listSorting(5, [5, 1, 2, 3, 4, 5]))
  // console.log(listSorting(0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
  // expect(listSorting(-1, [-1, 0, 10, 10, 10, 1, 1, 1, 1, 1, 1])).toBe(0);
  // expect(listSorting(2, [2])).toBe(0);
  // expect(listSorting(1, [])).toBe(-1);
  // expect(listSorting(3, [-1, 0, 1, 2, 3])).toBe(4);
  // expect(


  module.exports = listSorting;
