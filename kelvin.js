// Project 1 - Kelvin Weather
// create a constant variable for Kelvin
const kelvin = 293;
console.log('Kelvin is ' + kelvin + ' degrees.');

// convert Kelvin got Celsius
const celsius = kelvin - 273;
console.log('Kelvin is converted from ' + kelvin + ' degrees to ' + celsius + ' degrees Celsius.');

// calculate Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

/* decimal is rounded down using the .floor() method.
*/
fahrenheit = Math.floor(fahrenheit);

/* using string interpolation, or template literal, to write the sentence.
*/
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

// Converting Celsius to Newton
let newton = celsius * (33/100);

/*
decimal is rounded down using the .floor() method.
*/
newton = Math.floor(newton);

console.log(`The temperature is ${celsius} degrees Celsius, which is converted to ${newton} degrees Newton.`);
