

console.log("HOMEWORK6");

function getFullNames(firstNames, lastNames) {
    
    let fullNames = [];
    
   
    for (let i = 0; i < firstNames.length; i++) {
     
      fullNames.push(`${i + 1}. ${firstNames[i]} ${lastNames[i]}`);
    }
    
    return fullNames;
  }
  
  // Example usage:
  let firstNames = ["Bob", "Jill"];
  let lastNames = ["Gregory", "Wurtz"];
  let result = getFullNames(firstNames, lastNames);
  console.log(result);  