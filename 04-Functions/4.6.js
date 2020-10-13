
const readlineSync = require("readline-sync");
let number = new Number(readlineSync.question("Enter a number: "));



function factorial(a) {
    let answer = 1;
  if (a == 0 || a == 1){
    return answer;
  }else{
    for(let i = a; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }   
}

let factorialNumber = factorial(number);

console.log("The factorial for " + number + " is " + factorialNumber);