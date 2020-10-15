const readlineSync = require("readline-sync");

askTvSerie();


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
}







