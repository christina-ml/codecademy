// Secret Message - Arrays

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// remove last string of array
secretMessage.pop();

// console.log(secretMessage.length);

// add words to end of array
secretMessage.push("to", "Program");

// change the word 'easily' to 'right'
secretMessage[7] = "right";

// remove first string of the array
secretMessage.shift();

// add string 'Programming' to beginning of the array
secretMessage.unshift('Programming');

//  remove the strings get, right, the, first, time and replace them with the string 'know,'
secretMessage.splice(6, 5, "know,");

console.log(secretMessage.join(' '));
