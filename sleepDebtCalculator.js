/*
determine how many hours of sleep you got each night of the week.
function to return any given night's number of hours of rest. Give single parameter of 'day'.
*/
// get sleep hours for each night
const getSleepHours = day => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 9;
  } else if (day === 'wednesday') {
    return 10;
  } else if (day === 'thursday') {
    return 7;
  } else if (day === 'friday') {
    return 6;
  } else if (day === 'saturday') {
    return 5;
  } else if (day === 'sunday') {
    return 4;
  }
};

// try as a switch statement (undo comment-out, and comment-out the if..else if you want to try it!):
/*
const getSleepHours = day => {
    switch (day) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 9;
    case 'wednesday':
      return 10;
    case 'thursday':
      return 7;
    case 'friday':
      return 6;
    case 'saturday':
      return 5;
    case 'sunday':
      return 4;
  };
};
*/

// test the function by calling it to the console
// console.log(getSleepHours('sunday') + ' hours of sleep on Sunday.');


// create new function:
// calculate total sleep hours you actually slept
// use concise body form (no brackets or the 'return' keyword)
const getActualSleepHours = () =>
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');


// function for ideal sleep hours
const getIdealSleepHours = () => {
  const idealHours = 7.5;
  // multiply by 7, for 7 days in a week
  return idealHours * 7;
};


// test the two new functions by printing to the console
console.log(getActualSleepHours() + ' actual sleep hours.');
console.log(getIdealSleepHours() + ' ideal sleep hours.');

// calculate sleep debt
// create function with no parameters
// create variables for each
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

  // create if..else statements
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed, which is ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than the ideal amount.');
  } else {
    console.log('You should get some rest because you got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than ideal.');
  };
};

// call the function
calculateSleepDebt();
