class Animal{
    constructor(name)
    {
        this.name=name;
    }

    loud()
    {
        console.log(`${this.name} is louding`);
    }
}

class Dog extends Animal{
    constructor(name,breed)
    {
        super(name);
        this.breed=breed;
    }

    bark()
    {
        console.log(`${this.name} is barking `)
    }
}

let animal=new Animal("Cat");
let dog=new Dog("Goat","Golden Retrieveer");
animal.loud();
console.log("=====================");

dog.loud();
dog.bark();
console.log("===========================");
