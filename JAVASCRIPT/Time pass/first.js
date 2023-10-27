// Import the prompt-sync module
const prompt = require('prompt-sync')();

// Prompt the user to enter their name
const name = prompt('Enter your name: ');

// Prompt the user to enter their caste
const caste = prompt('Enter your caste: ');

// Display the entered values on the console
console.log(`Your name is ${name} and your caste is ${caste}.`);