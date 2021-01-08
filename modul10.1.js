
      let numX=prompt('Введите число','');
           
           let  num=+numX;
            if(typeof (num)==='number'){
                 console.log(true);
            }
             if (isNaN(num)||numX=== null||numX===''){
                   console.log('Упс, кажется, вы ошиблись');
              }
            else if (0==num%2){
               console.log('Вы ввели четное число');
               }
               else  {
               console.log('Вы ввели нечетное число');
               }
            
         
      
        
       
    