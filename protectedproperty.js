class MyClass{

    constructor()
    {
        // protected property
        this._protectedProperty="I am protected property";

    }
}

class DerivedClass extends MyClass
{
    constructor()
    {
        super();
    }


    // Accessing the protected property

    getProtectedProperty()
    {
        return this._protectedProperty;
    }
}


let object=new DerivedClass();
console.log(object._protectedProperty);  // No recomanded but accessible

console.log(object.getProtectedProperty());
