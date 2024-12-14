
console.log("HOMEWORK5");
let numberss = [3, 5, 6, 8, 11];


function sumMaxMin(numberss) {
    

    let max = numberss[0];
    let min = numberss[0];
  
    
    for (let i = 1; i < numberss.length; i++) {
      if (numberss[i] > max) {
        max = numberss[i];
      }
      if (numberss[i] < min) {
        min = numberss[i];
      }
    }


    let sum = max + min;
  
    
    return  `The maximum number in array is : ${max}, and minumum : ${min}, resultt of them is : ${sum}`;
  }
  
  console.log(sumMaxMin(numberss)); 
  