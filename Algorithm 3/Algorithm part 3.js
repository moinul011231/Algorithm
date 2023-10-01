function builChar(str){


    const charMap={};
    
    
    for(let char of str.replace(/[^\w]/g,"").toLowerCase()){
        charMap[char]=charMap[char]+1 || 1;
    }
       return charMap;
    
    }
    
    function checkAnagram(strA,strB){
    
    
        let charMapA= builChar(strA);
        let charMapB= builChar(strB);
    
      if(Object.keys(charMapA).length !== Object.keys(charMapB).length ){
    
        return false;
      }
    
       for(let char in charMapA){
    
          if(charMapA[char] !== charMapB[char]){
            return false;
          }
    
       }
    
    
    
       return true;
    
    
    
    
    }
    
    // Array Chunk 
    
    function ArrayChunk(arr,chunk){
    
    let chunked =[];
    
    for(let element of arr){
    
      let lastElement = chunked[chunked.length -1];
       if(!lastElement || lastElement.length == chunk){
    
           chunked.push([element]);
    
    
       }
     else{
             lastElement.push(element);
     }
    
    
         return chunked;
    
    
    }
    
    }
    
    console.table(ArrayChunk([1,3,45,6,2,7,8,0,11],3));