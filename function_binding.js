let user = {
    firstName: "John",
    sayHi() {
    console.log(`Hello, ${this.firstName}!`);
    }
  };
  
  let sayHi = user.sayHi.bind(user); // (*)
  
  // can run it without an object
  sayHi(); // Hello, John!
  
 