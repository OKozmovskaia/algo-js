const readlineSync = require("readline-sync");

let numberForTimes = new Number(readlineSync.question("Enter number:"));
let b = 0;

for (let i = 1; i <= numberForTimes; i++) {
  let n = new Number(readlineSync.question("Enter number."));
  b += n;
}

console.log(b);
