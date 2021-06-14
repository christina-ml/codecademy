/*
Magic 8 Ball - JavaScript
String interpolation, Else/If statements, ternary operator, switch statements
*/
// create a variable for the user's name
const userName = 'Christina';

// create a variable for the user's question
const userQuestion = 'Will I finish my Codecademy lessons?';

/*
While this is correct, it is not using the ternary expression:
if (userName) {
  console.log(`Hello ${userName}!`);
} else {
  console.log('Hello!');
};
*/

// This uses the ternary operator:
userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');

/*
While this is correct with concatenation, try using string interpolation to do it instead.
console.log('Your question is: ' + userQuestion);
*/

console.log(`${userName}'s question is: ${userQuestion}`);

/*
set a variable to generate a random number between 0 and 7
*/
const randomNumber = Math.floor(Math.random() * 8);
// set eight ball variable to an empty string
let eightBall = '';

switch(randomNumber) {
  case 0:
    // save an answer to the eightBall variable
    eightBall = 'It is certain';
    /*
    remember to use breaks! otherwise the next case will run.
    */
    break;
  case 1:
    eightBall = 'It is decidely so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
};

// Print the eight ball's answer to the console
console.log(`The eight ball answered: ${eightBall}`);
