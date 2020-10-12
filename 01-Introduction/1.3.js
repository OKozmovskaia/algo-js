const readlineSync = require("readline-sync");

let userFirstName = readlineSync.question("What's your name?");
console.log("Hello " + userFirstName);