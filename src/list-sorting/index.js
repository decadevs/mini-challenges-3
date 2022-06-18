function listSorting(needle, haystack)
{
  let lastIndex = -1;
  //traverse array rows backwards to spot last appearance first
  for (let i = haystack.length; i > 0; i--)
  {
    //value at index is iterable if iterator is a function
    if (typeof haystack[i - 1][Symbol.iterator] === 'function')
    {
      //multidimensional logic- traverse columns backwards also
      for (let j = haystack[i - 1].length; j > 0; j--)
      {
        //check for needle and return array of row and column indexes if found
        if (haystack[i - 1][j - 1] === needle)
        {
          return [i - 1, j - 1];
        }
      }
    }
    //1d array- check for needle and return index if found
    else if (haystack[i - 1] === needle)
    {
      return i - 1;
    }
  }
  return lastIndex;
}

module.exports = listSorting;
