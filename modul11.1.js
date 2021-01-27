
      
            
          const arr2=[1,null,90,44,'tel',5,9,0, NaN, true, false, undefined, '15', {}];
function funcNum(arr2){
let evenNumber=0, oddNumber=0, zeroNumber=0;

for (let i=0;i<arr2.length;i++){        
  if(typeof (arr2[i]) ==='number' && !isNaN(arr2[i])){
    if (arr2[i] === 0) {
      zeroNumber++;
        
    } else if (arr2[i] % 2 === 0) {
      evenNumber++;
    } else {
      oddNumber++;
    }
  }
};
console.log('Количество четных чисел: '+ evenNumber );
console.log('Количество нулей: ' +zeroNumber);
console.log('Количество нечетных чисел: '+ oddNumber);
}
            
 console.log(funcNum(arr2));
    