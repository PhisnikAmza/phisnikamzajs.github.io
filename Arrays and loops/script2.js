// Homework2
/*
Write a function that will take an array of 5 numbers as an argument and return the sum.

Print it in the console or in alert
*/
console.log("HOMEWORK2");

let numbers = [1, 2, 3, 4, 5];

function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum = sum + numbers[i];
    }
  
    // Print the sum in the console
     console.log("The sum is: " + sum);
  
    
    // alert("The sum is: " + sum);
  }
  
 
  
 sumNumbers(numbers);
  