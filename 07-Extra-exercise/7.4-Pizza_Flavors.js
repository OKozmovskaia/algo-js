const readlineSync = require("readline-sync");


let number = 0;
let pizzaFlavor = {
  nameOfFlavor: [],
}
let arr = pizzaFlavor.nameOfFlavor;

takeNumber();
// take a number from user
function takeNumber() {
  number= Number(readlineSync.question(
  "Hello! Welcome to the Pizza Flavors Manager. \n \n Please choose your actions: \n 1 - List all the pizza flavors \n 2 - Add a new pizza flavor\n 3 - Remove a pizza flavor\n 4 - Exit this program\n Enter your action's number: "));
  return number;
}
checkNumber(number);

// check the number of menu
function checkNumber(n) {

  // validate the command
  if(n === 1) {
    // display the current list of flavor
    console.log("The list of flavors for pizza: " + arr);
    localStorage.getItem(arr);
    
  } else if (n === 2) {
    // add new pizza flavor
    let newFlavor = readlineSync.question("Add your flavor? ");
    addNewFlavor(newFlavor);
    
    } else if (n === 3) {
      // remove flavor from list
      let numberOfPizzaFlavor = new Number(readlineSync.question("Add number of flavor what you want to delete? "));
      arr.forEach(() => {
        if (numberOfPizzaFlavor === arr[x]) {
          arr.splice(x, 1);
        }
      })} else if(n === 4) {
        return arr;

        // validate another numbers
      } else {
        takeNumber();
        checkNumber(number);
      }
}

console.log(arr);

function addNewFlavor(flavor) {
  arr = JSON.parse(localStorage.getItem('arr')) || [];
  arr.push(flavor);
  localStorage.setItem('arr', JSON.stringify(arr));

  let newPizzaFlavor = readlineSync.question("Add your flavor? ");
  addNewFlavor(newPizzaFlavor);
  }






