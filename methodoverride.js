class Animal{
    constructor(name)
    {
        this.name=name;
    }

    makeSound()
    {
        console.log(`${this.name}  makes a generic sound`);
    }
}

class Cat extends Animal{
    constructor(name, breed)
    {
        super(name);

        this.breed=breed;
    
    }

    makeSound()
    {
        console.log(`${this.name}  the ${this.breed} meowss`);
    }

    weep()
    {
        console.log(`${this.name} is meowing`);
    }
}

let animal=new Animal("Generic Animal");

let cat=new Cat("Whiskers","Siamese")

animal.makeSound();
cat.makeSound();
cat.weep();