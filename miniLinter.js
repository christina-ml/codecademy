// Iterators - Mini Linter project - 9-15-21
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
// console.log(storyWords.length) //> 188

let betterWords = storyWords.filter((word)=>{
  if (!unnecessaryWords.includes(word)){
    return word;
  }
})
// console.log(betterWords);

let countOverusedWords = 0;
betterWords.forEach((word)=>{
  if (overusedWords[0] === word){
    countOverusedWords +=1;
  } else if (overusedWords[1] === word){
    countOverusedWords +=1;
  } else if (overusedWords[2] === word){
    countOverusedWords +=1;
  }
})
// console.log(countOverusedWords); //> 8

let countSentences = 0;
betterWords.forEach((word)=>{
  if (word.includes(".")){
    countSentences +=1;
  } else if (word.includes("!")){
    countSentences +=1;
  }
})
// console.log(countSentences); //> 12

let wordCount = betterWords.length;
let sentenceCount = countSentences;
let overusedCount = countOverusedWords;

// create a function that logs all of them with some formatting
const logInfo = (wordCount, sentenceCount, overusedCount) =>{
  console.log('word count: ' + wordCount);
  console.log('sentence count: ' + sentenceCount);
  console.log('overused count: ' + overusedCount);
}
// call function
logInfo(wordCount, sentenceCount, overusedCount);

// Join the story back together!
console.log(betterWords.join(' '));
