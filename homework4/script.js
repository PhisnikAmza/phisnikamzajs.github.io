// alert("hello");

function calculate(num1, num2, operator) {
    let result;
  
   
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = 'Error: Division by zero';
        }
        break;
      default:
        result = 'Invalid operator';
    }
  
    return result;
  }
  
  
  let num1 = parseFloat(prompt("Enter the first number:"));
  let num2 = parseFloat(prompt("Enter the second number:"));
  let operator = prompt("Enter an operator (+, -, *, /):");
  
  
  let result = calculate(num1, num2, operator);
  
 
  console.log(`Result of two digits is : ${result}`);
  