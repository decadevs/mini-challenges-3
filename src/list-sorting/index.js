    /**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 function listSorting(haystack, needle) {
    // code goes here  
    let arr = haystack.split(",");
    let sorted = arr.sort();
    let index = sorted.indexOf(needle);
    return index;
  }

    console.log(listSorting("hello,world,here,i,am", "world"));


module.exports = listSorting;
