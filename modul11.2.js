function showNumber(){
                
            let num=5;
             
                let flag=true;
                
               
                for (let i=2;i<num;i++){
                   if(num % i==0){
                       flag=false;
                     
                       break;
                   } 
                }
                
                if (flag==true){
               console.log('Число является простым');   
                } 
                else{
                   console.log('Число не является простым');   
                } 
               if(num>=1000){
                         console.log('Данные неверны');     
                        }
                    
            };    
            
              showNumber();
      