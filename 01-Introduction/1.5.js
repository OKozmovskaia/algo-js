const readlineSync = require("readline-sync");

let firstNumber = readlineSync.question("Enter the first decimal number?");
let secondNumber = Math.trunc(readlineSync.question("Enter the second decimal number?"));
console.log(secondNumber);

let multuply = firstNumber * secondNumber;

console.log(multuply);