// User prompts
const fnumber = Number(prompt("What is the first number?"));
const snumber =  Number(prompt ("What is the second number?"));



// Date and Time
const now = new Date();

// Math
const avg = (fnumber + snumber) / 2;

// Outputs
console.log(`The average of ${fnumber} and ${snumber} is ${avg}`);

console.log(now.toLocaleString());

