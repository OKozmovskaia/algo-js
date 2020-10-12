const readlineSync = require("readline-sync");

let firstNumber = readlineSync.question("Enter the first integer number?");
let secondNumber = readlineSync.question("Enter the second integer number?");

let restOfDivision = firstNumber % secondNumber;

console.log(restOfDivision);