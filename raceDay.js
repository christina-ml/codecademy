// Race Day - JavaScript
/*
This range of numbers will be from 0 (inclusive) to 1000 (exclusive). So we will have only whole numbers from 0 to 999
*/
let raceNumber = Math.floor(Math.random() * 1000);

/*
variable for early registration (or not) - boolean value.
Change the values of these two variables to see the different results!
*/
const registeredEarly = true;
const age = 25;

/*
This is an unused variable. But good way to think about it! (can delete...)
const adult = age > 18 && registeredEarly;
*/

/*
control flow statement that checks whether runner is an adult AND registered early. If true, add 1000 to their race number.
*/
if (age > 18 && registeredEarly) {
  raceNumber += 1000;
};

// second control flow statement
if (age > 18 && registeredEarly) {
  console.log(`You are a runner over 18 who registered early. You will race at 9:30am. Your race number is: ${raceNumber}.`);
  // for those who are over 18 but did not register early
} else if (age > 18 && !registeredEarly) {
  console.log(`You are over 18, and did not register early so you will race at 11:00am. Your race number is: ${raceNumber}`);
} else if (age < 18){
  console.log(`Youth registrants run at 12:30pm (regardless of registration). Your race number is: ${raceNumber}`);
} else {
  console.log('You are exactly 18 years old. Please see the registration desk.');
};
