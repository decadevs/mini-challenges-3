function listSorting(needle, haystack) {

    let arr = [];
    const arr2 = []
    let emptyArr = [];
    let column = [];
    let row = []
    let result = -1;



    haystack.forEach((el, i) => {

        if (Array.isArray(el)) {
            // console.log('yes its an array');
            if (el.length == 0) {
                result = -1;
            } else {
                arr.push(...el);
                el.forEach((el2, i2) => {
                    if (needle == el2) {
                        column.push(i2);
                        row.push(i)
                    }
                })
            }
        } else {
            result = haystack.lastIndexOf(needle)
        }

    });

    if (column.length != 0) {
        result = [row[row.length - 1], column[column.length - 1]]
        return result
    } else {
        return result
    }

}

module.exports = listSorting;


