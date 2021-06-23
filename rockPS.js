// define variables
// const rock = 'rock';
// const paper = 'paper';
// const scissors = 'scissors';

/*
use arrow function syntax, to create a function that takes a single parameter
*/
const getUserChoice = userInput => {
  /*
  A user passes in a paramater - so make all user input lowercase
  */
  userInput = userInput.toLowerCase();

  // if..else statement for rock, paper, OR scissors
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('error! - this isn\'t a valid choice.');
  }
};

/*
test the function by calling it with valid and invalid input. Delete when you know the function works (or comment-out).
*/
// console.log(getUserChoice('PaPeR'));
// console.log(getUserChoice('fsdf'));

// have computer make a choice
const getComputerChoice = () => {
  /*
  Define variable & create a random whole number between 0 and 2
  */
const randomNumber = Math.floor(Math.random() * 3);
  /*
  use an if..else or switch statement to return the computer's choice.
  Switch statement:
  */
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

// test the function by calling it
console.log(getComputerChoice());

// Determine a winner!
/*
create function that takes 2 parameters
*/
const determineWinner = (userChoice, computerChoice) => {
  // use if..else statement for a tie
if (userChoice === computerChoice) {
  return 'The game is a tie!';
}

  // if not a tie, determine a winner
  // if userChoice is rock
if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}

  // if userChoice is paper
if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}

  // if userChoice is scissors
if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}

// test your function!
console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'
