
// constructor override


class Animal{
    constructor(name)
    {
        this.name=name;
    }

    speak()
    {
        console.log(`${this.name}  makes a sound`);
    }
}

class Dog extends Animal{
    constructor(name,breed)
    {
        super(name);
        this.breed=breed;
    }

    speak()
    {
        console.log(`${this.name} the ${this.breed} barks`)
    }
}


let animal=new Animal("Generic Animal");
let dog=new Dog("Buddy", "Golden Retriever");

console.log(animal.name)
console.log(dog.name)
dog.speak();