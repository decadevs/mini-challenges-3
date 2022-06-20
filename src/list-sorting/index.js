function listSorting(needle, haystack)
{
  let lastIndex = -1;
  /* we traverse backwards in order to spot the last appearance first,
  hence the use of - 1 to account for zero-indexing */
  for (let i = haystack.length; i > 0; i--)
  {
    if (Array.isArray(haystack[i - 1]))
    {
      for (let j = haystack[i - 1].length; j > 0; j--)
      {
        if (haystack[i - 1][j - 1] === needle)
        {
          return [i - 1, j - 1];
        }
      }
    }
    else if (haystack[i - 1] === needle)
    {
      return i - 1;
    }
  }
  return lastIndex;
}

module.exports = listSorting;
