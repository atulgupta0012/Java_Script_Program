class Animal{
    constructor(name,sound)
    {
        this.name=name;
        this.sound=sound;
    }

    makeSound()
    {
        console.log(`${this.name} always ${this.sound}`)
    }


}

let dog=new Animal("Dog","Barking");
let BabyDog=new Animal("BabyDog", "Weaping");
dog.makeSound();
BabyDog.makeSound();

