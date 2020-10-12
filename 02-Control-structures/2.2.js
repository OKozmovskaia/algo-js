const readlineSync = require("readline-sync");

let min = new Number(readlineSync.question("Enter minimum number?"));
let max = new Number (readlineSync.question("Enter maximum number?"));
let current = new Number(readlineSync.question("Enter current number?"));

if (min > max) {
  console.log ("You doesn't anything, good buy!");
} else if ((min < current) && (current < max)) {
  console.log("Your current number is " + current + ". And Current number there is between " + min + " and " + max + ".");
}
