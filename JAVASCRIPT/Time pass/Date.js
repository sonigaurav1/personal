// Get the current date
const currentDate = new Date();

// Extract the date components
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();

// Format the date as a string
const dateString = `${day}/${month}/${year}`;

// Display the date on the console
console.log(`Today's date is ${dateString}.`);