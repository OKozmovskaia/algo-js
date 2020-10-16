const readlineSync = require("readline-sync");

// function that generate random number

let randomNumber = 0;

function makeRandomNumber() {
  randomNumber = new Number(Math.floor(Math.random() * 100));
  return randomNumber;
}

makeRandomNumber();
console.log("Random number is " + randomNumber);

// take number from user

let userNumber = new Number(readlineSync.question("Guess the number between 1 and 100? "));

// compare two numbers

while (userNumber !== randomNumber) {
  userNumber = new Number(readlineSync.question("Guess the number between 1 and 100? "));
    
  if (userNumber > randomNumber) {
        console.log("Too high!");
    } else if (userNumber < randomNumber) {
          console.log("Too low!");
      } else {
          return (console.log("Well guessed!"));
        };
};




