function listSorting(needle, haystack) {
  //initialise result to -1 as the case when the needle is not found
  let result = -1

  //Loop through the array of haystack to search needle in descending order
  for (let i = haystack.length - 1; i >= 0; i--) {
    //Check if needle is there and the corresponding index
      if (Array.isArray(haystack[i])) {
          let index = haystack[i].lastIndexOf(needle)
          //Return the -1 if not found and assign the index to result if found
          if (index != -1) {
              result = [i, index]
              return result
          }

      } else {
          if (haystack[i] === needle) {
              result = i
              return result
          }
      }
  }
  return result

}

// console.log(listSorting(8, [
//   [1, 2, 3, 4, 8],
//   [1, 2, 3, 4, 5],
//   5,
// ]))

module.exports = listSorting;


