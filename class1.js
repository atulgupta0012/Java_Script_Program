class Person{
    name="John";

    sayHi()
    {
        console.log(` Hello ${this.name}`);
    }
}

new Person().sayHi();