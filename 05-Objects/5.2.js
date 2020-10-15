// function that  store object with serial
const readlineSync = require("readline-sync");

function askTvSerie() {

// the main object
  let objectSerial = {
    name: " ",
    productionYear: " ",
    namesActors: []
  }

  let nameSerial = readlineSync.question("What your favorite serial? ");
  objectSerial.name = nameSerial;

  let yearSerial = readlineSync.question("What year did it come? ");
  objectSerial.productionYear = yearSerial;

  let numberOfActors = new Number(readlineSync.question("How much actors your remember on that serial? "));
  // the nested object
  for (let i = 1; i <= numberOfActors; i++) {
    
    let actor = {
      name: " ",
      role: " "
    }

    let actorSerial = readlineSync.question("Name, please: ");
    actor.name = actorSerial;

    let roleActor = readlineSync.question("The role of him: ");
    actor.role = roleActor;

    objectSerial.namesActors.push(actor);
  }

  console.log(objectSerial);
  return objectSerial;
}


// object = {
//   name: 'Game of Throns',
//   productionYear: '2000',
//   namesActors: [
//     { name: 'Kit Harington', role: 'Jone Snow' },
//     { name: 'Emilia Klark', role: 'Khalisi' },
//     { name: 'Peter Dinklage', role: 'Tyrion Lanister' }
//   ]
// };

// call the function that create obj
let object = askTvSerie()


// function that random cast in main object
function randomizeCast(obj) {
  let array = obj.namesActors

  let numberOfIndex = array.length;
  
  while (numberOfIndex > 0) {
    // Pick a random index for element of array
    let index = Math.floor(Math.random() * numberOfIndex);
    numberOfIndex--;

    // Swap the last element of array with element with new index
    let lastElement = array[numberOfIndex];
    array[numberOfIndex] = array[index];
    array[index] = lastElement;
  }

  return array;
}

// call the function that random cast
let renederObj = randomizeCast(object)
console.log(renederObj);
