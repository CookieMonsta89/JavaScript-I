// ==== Objects ====

/* 
  Given the following information about dinosaurs, create 3 objects: 
  Use this pattern to create your objects: 
  object name, diet, weight, length, period
*/

// tyrannosaurus, carnivorous, 7000kg, 12m, Late Cretaceious
const tyrannosaurus = {
  name: 'T-Rex',
  diet: 'Carnivore',
  roar: () => {
    return 'Hello, Im a trex'

  }
}
// stegosaurus, herbivorous, 2000kg, 9m, Late Jurassic

// velociraptor, carnivorous, 15kg, 1.8m, Late Cretaceious

// Using your dinosaur objects, log answers to these questions:

// How much did tyrannosaurus weigh?
console.log(tyrannosaurus.name);
// What was the diet of a velociraptor?
// console.log(velociraptor.diet);
// // How long was a stegosaurus?
// console.log(stegosaurus.length);
// What time period did tyrannosaurus live in?
console.log(tyrannosaurus.diet);

// Create a new roar method for the tyrannosaurus.  When called, return "RAWERSRARARWERSARARARRRR!" Log the result.
console.log(tyrannosaurus.roar());


