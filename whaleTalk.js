/**
 * Whale Talk - JavaScript (Loops)
 * Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.
 * There are a few simple rules for translating text to whale language:
 * There are no consonants. Only vowels excluding “y”.
 * The u‘s and e‘s are extra long, so we must double them in our program.
 * Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.
 */

 let input = "turpentine and turtles";
 const vowels = ['a', 'e', 'i', 'o', 'u'];
 // place to store vowels from `input` string
 let resultArray = [];
 
 // loop to iterate through each letter of the `input` variable text
 for (let i = 0; i < input.length; i++) {
   // console.log('i is ' + i);
   // nested "for" loop:
   for (let j = 0; j < vowels.length; j++) {
     // console.log('j is ' + j);
     if (input[i] === vowels[j]) {
       resultArray.push(vowels[j]);
     }
   }
     // after inner for loop block // inside the outer for loop
     // Whales double their e‘s and the u‘s in their language.
     if (input[i] === 'e' || input[i] === 'u') {
       resultArray.push(input[i]);
     }
 }
 
 console.log(resultArray.join('').toUpperCase());
 