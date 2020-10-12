const readlineSync = require("readline-sync");

let favoriteNumber = new Number(readlineSync.question("Enter your favorite number?"));

while (favoriteNumber != 42) {
  console.log("Are you sure?");
  favoriteNumber = readlineSync.question("Enter your favorite number?");
}