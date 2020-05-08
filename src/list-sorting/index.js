function listSorting(needle, haystack) 
{
    //if the array to be used for the search is empty do underly
    if (haystack.length === 0)
    {
        return -1;
    }
    
    //arrays are zero based, hence the actual length is total length minus 1
    let stackLength = haystack.length - 1;
    
    //use the below for loop in decreasing order to target the last index of the needle
    for (let rowIndex = stackLength; rowIndex >= 0; rowIndex--)
    {
        //if you find an array at any index, extend the search within that array...
        if (haystack[rowIndex].length >= 1)
        {
            let colLength = haystack[rowIndex].length - 1;

            //...loop through each column of such row (i.e array) 
            for (let colIndex = colLength; colIndex >= 0; colIndex--)
            {
                //if you find the needle match, return that point
                if(haystack[rowIndex][colIndex] === needle)
                {
                    return [rowIndex, colIndex];
                }
                //if you get to the very least row and column and no match...
                if (rowIndex === 0 && colIndex === 0 && haystack[0][0] !== needle)
                {
                    return -1;
                }
            }
        }
        //if item in the row is not an array but it matched needle return the index position
        else if (haystack[rowIndex] === needle)
        {
            return rowIndex;
        }
        //if you get to the least array item and nothing match needle return -1
        else if(rowIndex === 0)
        {
            return -1;
        }
    }

}

module.exports = listSorting;
