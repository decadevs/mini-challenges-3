function listSorting(needle, haystack) {
    let arrayIndex = null
    let needleIndex = null
    let result = null

    if (haystack[0][0]) {
        for (let i = 0; i < haystack.length; i++) {
            for (let j = 0; j < haystack[i].length; j++) {
                if (haystack[i].lastIndexOf(needle) !== -1) {
                    needleIndex = haystack[i].lastIndexOf(needle)
                    arrayIndex = haystack.indexOf(haystack[i])
                }
            }
        }
    } else if (!haystack[0][0]) {
        for (let i = 0; i < haystack.length; i++) {
            needleIndex = haystack.lastIndexOf(needle)
        }
    }
    if (arrayIndex) {
        result = `[${arrayIndex}, ${needleIndex}]`
    } else (
        result = needleIndex
    )
    return result
}

module.exports = listSorting;
