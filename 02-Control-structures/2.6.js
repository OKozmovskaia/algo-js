const readlineSync = require("readline-sync");

let dayOfTheWeek = new Number(readlineSync.question("Enter number between 1 and 7?"));

while (dayOfTheWeek >= 8) {
  console.log("You entered wrong number.");
  dayOfTheWeek = new Number(readlineSync.question("Enter number between 1 and 7?"));
} 

while (dayOfTheWeek <= 0) {
  console.log("You entered wrong number.");
  dayOfTheWeek = new Number(readlineSync.question("Enter number between 1 and 7?"));
} 

if (dayOfTheWeek == 1) {
  console.log("Monday");
} else if (dayOfTheWeek == 2) {
  console.log("Tuesday");
} else if (dayOfTheWeek == 3) {
  console.log("Wednesday");
} else if (dayOfTheWeek == 4) {
  console.log("Thursday");
} else if (dayOfTheWeek == 5) {
  console.log("Friday");
} else if (dayOfTheWeek == 6) {
  console.log("Saturday");
} else if (dayOfTheWeek == 7) {
  console.log("Sunday");
}