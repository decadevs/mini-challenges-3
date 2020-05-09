function listSorting(needle, haystack) 
{
    //Some varaibles
    var x;
    var y;
    var answer;
    var found = false;
    // Determine if its an array of arrays or an array of numbers
    if(typeof haystack[1] == "object")
    {
        //for array of arrays
        for(let i = 0; i < haystack.length; i++)
        {
            for (let j = 0; j < haystack[i].length; j++) 
            {
               if (haystack[i][j] == needle)
               {
                   found = true;
                   x = i;
                   y = j;
               }
                
            }
        }
        //Assign Answer
        answer = [x,y];
    }else
    {
        for (let i = 0; i < haystack.length; i++) 
        {
            if(haystack[i] == needle)
            {
                found = true;
                //assign answer
                answer = i;
            }    
        }
    }
    if(found == true)
    {
        return answer;
    }else 
    { 
        return -1;
    }

    
}

module.exports = listSorting;
