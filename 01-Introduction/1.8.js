const readlineSync = require("readline-sync");

let numberOfQuestion = 5;


let question1 = readlineSync.question("What your favorite color?");
numberOfQuestion -= 1;
console.log(numberOfQuestion + " questions left.");

let question2 = readlineSync.question("What your favorite animal?");
numberOfQuestion -= 1;
console.log(numberOfQuestion + " questions left.");

let question3 = readlineSync.question("What your favorite place?");
numberOfQuestion -= 1;
console.log(numberOfQuestion + " questions left.");

let question4 = readlineSync.question("What your favorite flower?");
numberOfQuestion -= 1;
console.log(numberOfQuestion + " question left.");

let question5 = readlineSync.question("What your favorite writer?");
numberOfQuestion -= 1;
console.log(numberOfQuestion + " questions left.");


console.log(question5 + " live in " + question3 + " with " + question2 + " and " + question1 + "-" + question4 + " before house.");