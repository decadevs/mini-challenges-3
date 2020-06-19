function listSorting(needle, haystack) {
    let result = [];
    // check if the array is a nested array 
    if (haystack.length && haystack[0].constructor === Array) {
        // loop through each row in the array 
        haystack.forEach((arr, row) => {
            // check for the last occurence of the needle in the haystack
            if (arr.lastIndexOf(needle) !== -1) {
                result.push([row, arr.lastIndexOf(needle)])
            }
        })

    } else {
        // return the last index if it exists.
        return haystack.lastIndexOf(needle)
    }
    // if its not there, return -1 
    return result.length ? result[result.length - 1] : -1
}



console.log(listSorting(5, [1, 2, 3, 4, 5])); // should be 4 
console.log(listSorting(5, [1, 2, 3, 4, 4, 4])); //should be -1
console.log(listSorting(-1, [-1, 0, 10, 10, 10, 1, 1, 1, 1, 1, 1])) //should be 0
console.log(listSorting(1, [
        [],
        []
    ])) //should be -1
console.log(listSorting(0, [
        [0, 0],
        [1, 3, 4, 0],
        [1]
    ])) //should be [0, 0])

module.exports = listSorting;