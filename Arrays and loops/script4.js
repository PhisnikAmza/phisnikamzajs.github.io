// Homework 4
/*

Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.

*/
console.log("HOMEWORK4");
function printNumbers() {
    for (let i = 1; i <= 20; i++) {
      if (i % 2 == 0) {
        console.log(i + "\n" );  
      } else {
        console.log(i + " even " );  
      }
    }
  }
  
//  ako moze feedback za new line i space da mi kazete
  printNumbers();
  
