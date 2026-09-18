// User prompts
const fnumber = Number(prompt("What is the first number?"));
const snumber =  Number(prompt ("What is the second number?"));


let start = "The gorilla ";
let end = "on the moon.";

const fill = prompt(`Fill in the blank: \n ${start} ____ ${end}`);

// Date and Time
const now = new Date();

// Math
const avg = (fnumber + snumber) / 2;

// Outputs
console.log(`The average of ${fnumber} and ${snumber} is ${avg}`);

console.log(`${start}${fill} ${end}`);

console.log(now.toLocaleString());


