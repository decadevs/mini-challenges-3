function listSorting(needle, haystack) {
    //debugger
    let needleIndex;
    let arrayIndex;

    for (let val of haystack) {
        if (Array.isArray(val)) {
            for (let i = 0; i < val.length; i++) {
                if (val[i] === needle) {
                    arrayIndex = haystack.indexOf(val);
                    needleIndex = val.indexOf(needle);
                }
            }


        } else {
            needleIndex = haystack.indexOf(needle);
        }


    }
      
    if (arrayIndex) {
        return `[${arrayIndex}, ${needleIndex}]`;
    }
    return needleIndex + "";

}

module.exports = listSorting;
