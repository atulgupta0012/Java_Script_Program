//Private properties are counterparts of the regular class properties which are public, including class fields, class methods, etc.


class Something {
    #property

    constructor() {
        this.#property = "test";
    }

    #privateMethod() {
        return 'hello world';
    }

    getPrivateMessage() {
        return this.#property;
    }
}

const instance = new Something();
console.log(instance.property); //=> undefined
console.log(instance.privateMethod); //=> undefined
console.log(instance.getPrivateMessage()); //=> test
