function printFirstElement(array){

    console.log(array[0]);
    
    
    
    }
    printFirstElement([1,2,37,8]);
    //Liner time
    
    function arrayPrint(array){
        
     for(let i = 0;i<array.length;i++){
    
        console.log(array[i]);
     }
    
    
    }
    
    arrayPrint([3,6,7,9,10,8]);
    
    //Exponential Time = 0(2^n)   fibonacci series
    
    Initialize an array with two elements [0,1]
     Iterate from 2 to n
     Retrive last two element from array and assign two new varriable (a,b)
     caLculate the sum of (a+b)
     add thr sum into result array
     return result array
    
    
    function normalFib(n){
    
    let result =[0,1];
    
    for(let i=2;i<=n;i++){
        const a= result[i-1];
        const b=result[i-2];
        result.push(a+b);
    }
    
     return result[n];
    
    }
    
    
    function maxCharacter(str){
    
    let charMap={};
    let max=0;
    let maxCharacter='';
    
    for(let char of str){
        charMap[char]=charMap[char]+1 || 1;
    }
    
    for(let char in charMap){
    
        if(charMap[char]>max){
            max=charMap[char];
            maxCharacter=char;
    
        }
    }
    
    
    return maxCharacter;
    }
