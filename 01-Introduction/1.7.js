const readlineSync = require("readline-sync");

let shoeSize = readlineSync.question("Enter your shoe size?");
let birthYear = readlineSync.question("Enter your birth year?");

let calculate = ((((shoeSize * 2) + 5) * 50 ) - birthYear) + 1766;

console.log(calculate);

//Result with my shoe size and birth year - 3730