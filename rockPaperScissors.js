/*
use arrow function syntax, to create a function that takes a single parameter
*/
const getUserChoice = userInput => {
  /*
  A user passes in a paramater - so make all user input lowercase
  */
  userInput = userInput.toLowerCase();

  // if..else statement for rock, paper, OR scissors
  // add secret 'bomb' cheat code
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
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
  let randomNumber = Math.floor(Math.random() * 3);
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
// console.log(getComputerChoice());


// Determine a winner!
/*
create function that takes 2 parameters
*/
const determineWinner = (userChoice, computerChoice) => {
// use if...else statement for secret cheat code 'bomb'
if (userChoice === 'bomb') {
  return 'You cheated and won!';
}

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
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('paper', 'paper'));
console.log(determineWinner('paper', 'rock'));
};

/*
Everything's set up! Start the game and log the results.
*/
// create a function named playGame
const playGame = () => {
  /*create variable for user choice
change this variable to change the user's choice. Try secret cheat code: 'bomb' to win!
  */
  const userChoice = getUserChoice('rock');

  // create a variable for cpu choice
  const computerChoice = getComputerChoice();

  // print variables to console
  console.log('You threw: ' + userChoice);
  console.log('Computer threw: ' + computerChoice);

  // call determine winner function
  console.log(determineWinner(userChoice, computerChoice));

};

// call function
playGame();
