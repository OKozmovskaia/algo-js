const readlineSync = require("readline-sync");
// ask user lengtn of array
let arrLength = new Number(readlineSync.question("Enter a number: "));

//  create random number
function rand10() {
  return Math.trunc(Math.random()*10);
}
let random = rand10();

// create array
let arr = [];

function multiRand(n) {
  for (i = 1; i <= n; i++){
    arr.push(rand10());
  }
}



multiRand(arrLength);

console.log(arr);