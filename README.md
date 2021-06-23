# codecademy

Projects done on Codecademy.

## Table of Contents
#### Introduction
1. [Kelvin Weather](#kelvin-weather)
2. [Dog Years](#dog-years)

#### Conditionals
3. [Magic 8 Ball](#magic-8-ball)
4. [Race Day](#race-day)

#### Functions
5. [Rock, Paper, or Scissors](#rock-paper-scissors)


## Kelvin Weather

Learning about temperature conversion between Fahrenheit, Celsius, Kelvin, and Newton!

* Using console.log() to print the output to the JavaScript console.
* Difference between naming variables with const & let (ES6 uses these names rather than 'var' for naming variables).
* string interpolation / template literals.
* .floor() method - rounds decimals down.


## Dog Years
Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.

* Math operators.
* Variables using 'let' and 'const' (not 'var')
* .toLowerCase() method (a JavaScript built-in method)
* String interpolation / template literals.


## Magic 8 Ball

In this project we will build the Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.

* Control Flow in JavaScript, user input.
* String interpolation / template literals
* Else/If statements
* ternary operator
* switch statements


## Race Day

Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.

* Math.floor() and Math.random()
* Variables 'const' and 'let'
* Control flow statements
* Boolean values
* logical operators (&&)
* else if statements


## Rock, Paper, Scissors

Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.

This code breaks the game into four parts:
Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.

* Variables 'const'
* Arrow functions
* Functions with single parameters
* Function .toLowerCase()
* Return statement
* If/Else statements
* Switch statements
* Calling functions

#### Note: There is a secret cheat code!

If the user types 'bomb' as their choice, they win, no matter what.
