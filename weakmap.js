let pets = new WeakMap();
let dog = { name: "badger" };

pets.set(dog, "okay");
console.log(pets); // WeakMap{ {...} -> "Okay" } <= dog set to the WeakMap

dog = null; // Overwrite the reference to the object
console.log(pets);