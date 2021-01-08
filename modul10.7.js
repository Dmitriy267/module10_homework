
      const arr2=[1,null,90,44,'tel',5,9,0];
            let evenNumber=0;
            let oddNumber=0;
            let zeroNumber=0;
           
            for (let i=0;i<arr2.length;i++){
                        
            if(typeof (arr2[i])==='number'&&isNaN(arr2[i])||arr2[i]=== null||typeof arr2[i]==='string'){
              
                   console.log(arr2[i]+' это не число');
              }
                else if(arr2[i]%2==0&&arr2[i]!==0){
                    evenNumber++;
                  
                   }
                else if(arr2[i]===0){
                      zeroNumber++;
                    
                        }
                else {
                    oddNumber++;
                   
                   }
           
            };
              console.log('Количество четных чисел: '+ evenNumber );
            console.log('Количество нулей: ' +zeroNumber);
             console.log('Количество нечетных чисел: '+ oddNumber);
            
       