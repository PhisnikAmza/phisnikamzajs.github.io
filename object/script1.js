// HOMEWORK1

let animal = {
   
    name: prompt(" What is your animal's name:"),
    kind: prompt("What's  the kind of the animal:"),
  
    
    speak: function(m) {
      console.log(`${this.kind} says: '${m}'`);
    }
  };
  
  
    let message = prompt("What should the animal say?");
  animal.speak(message);

