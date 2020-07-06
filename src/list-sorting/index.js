function listSorting(needle, haystack) 
{   
    

    for (let index = haystack.length-1; index>=0; index--)
    {   
        //compute for a single array
        if(typeof haystack[index] === 'number')
        {
            return haystack.lastIndexOf(needle)
        }

        //compute for multidimensional array
        if(haystack[index].lastIndexOf(needle) > -1 )
        {
            return [index , haystack[index].lastIndexOf(needle)]
        }

        
    }
    return -1;
    /*let positionX;
    let positionY;
    let positionXY;
    for (let i=0; i<haystack.length; i++) 
    {
      for (let j=0; j<haystack[i].length; j++) 
      {
        if (haystack[i][j] == needle) 
        { 
          positionX =i; 
          positionY=j;
          positionXY=[positionX,positionY];
          return positionXY;  
        } 
            
        }
        return -1;
      }*/
      
}

module.exports = listSorting;
