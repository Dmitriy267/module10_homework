function firstNumber(numA){
        
     return function twoNumber(numB){ 
            
     return numA+numB;
                   
     }
    };
             const resultFunc=firstNumber(3);
       console.log( resultFunc (5));
  
       
    