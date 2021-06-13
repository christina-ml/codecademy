// Project 2 - Dog Years
// create a variable for my age.
const myAge = 29;

/*
Create a variable that will change. This is to represent the first 2 years of a dog's life.
*/
let earlyYears = 2;

/*
The first two years of a dog's life count as 10.5 dog years each. This multiplies that, re-assigning the variable.
*/
earlyYears *= 10.5;

/*
We already accounted for the first two years, so we can subtract 2 from my age. This variable's value will be changed later.
*/
let laterYears = myAge - 2;

// calculate the number of dog years accounted for by your later years.
laterYears *= 4;

// check your work to see the values
console.log(earlyYears);
console.log(laterYears);

/*
Add early years and later years together to get my age in dog years.
*/
const myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

/*
Write my name using a string method. Then make it all lowercase, using the .toLowercase() method.
*/
let myName = 'Christina Loiacono'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);
