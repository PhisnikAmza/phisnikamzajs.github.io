// HOMEWORK2


let book = {
    
    title: prompt("Enter the title of the book:"),
    author: prompt("Enter the author of the book:"),
    readingStatus: prompt("Have you read the book? (yes/no):").toLowerCase() === "yes",
    
   
    displayStatus: function() {
      if (this.readingStatus) {
        console.log(`Already read '${this.title}' by ${this.author}.`);
      } else {
        console.log(`You still need to read '${this.title}' by ${this.author}.`);
      }
      
    }
  };
  
  book.displayStatus();

  // src script is commented