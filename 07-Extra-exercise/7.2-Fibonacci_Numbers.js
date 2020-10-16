const readlineSync = require("readline-sync");

// take the index of number for Fibonacci numbers from user

let index = new Number(readlineSync.question("Enter integer for create Fibonacci Numbers? "));

let arr = [0,1,1];

function fibonacciNumbers (j) {
  for (i = 3; i <= j; i++) {
  
    let arrNewFib = arr[i-1] + arr[i-2];
    arr.push(arrNewFib);
  }
  return arr;
}

fibonacciNumbers(index);
console.log(arr);