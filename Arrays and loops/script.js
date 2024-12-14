function tellStory(storyDetails) {
    let name = storyDetails[0];
    let mood = storyDetails[1];
    let activity = storyDetails[2];
    
    let story = `This is ${name}. ${name} is a nice person. Today he is  ${mood}. He is  ${activity} all day. The end.`;
    
    
    console.log(story);
  
   
  }
  
 
  let storyDetails = ["Fisnik", "happy", "walking"];
  tellStory(storyDetails);
  