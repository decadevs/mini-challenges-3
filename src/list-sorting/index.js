function listSorting(needle, haystack) {
    // check if the haystack is a multidimensional array
    let multidimension = false;
    for (let element of haystack) {
      if (typeof element === "object") {
        multidimension = true;
      }
    }
    
    // if what we are dealing with is a multidimensional array then we loop 
    if (multidimension) {
      const arrayCollector = [];
      for (let row in haystack) {
        if (haystack[row].includes(needle)) {
          arrayCollector.push([+row, haystack[row].lastIndexOf(needle)]);
        }
      }
      const result = arrayCollector.length !== 0 ?  arrayCollector[arrayCollector.length - 1] :  -1
      return result
    }
    
    //if haystack is not a multidimensional array then do this simple operation
    if (typeof haystack.lastIndexOf(needle) !== "undefined") {
      return haystack.lastIndexOf(needle);
    }
    return -1;
  }

module.exports = listSorting;
