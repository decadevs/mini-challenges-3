function listSorting(needle, haystack) {
    
    if (haystack != undefined){

        if (!Array.isArray(haystack[0])){ // If hatstack is a single row
            return haystack.lastIndexOf(needle)
        }

        let lastHaystack = haystack.length - 1

        for (let hayStackRow = lastHaystack; hayStackRow >= 0; hayStackRow--){

            let needleIndex = haystack[hayStackRow].lastIndexOf(needle)

            if(needleIndex !== -1) { // If needle is found
                return [hayStackRow, needleIndex]
            }
        }
    }
    return -1
}

module.exports = listSorting;

