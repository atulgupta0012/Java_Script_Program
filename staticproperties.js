// Static properties can be defined  by static keyword

class MyClass{
    static s1="I am static property";
    s2="I am instance property";

    constructor(name)
    {
        this.name=name;
        console.log(`Name is ${this.name}`)
    }
}


//  Here we are accesssing the static property
console.log(MyClass.s1);

const c1=new MyClass("Example");

console.log(c1.s2);