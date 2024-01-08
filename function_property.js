function sayHi() {
    alert("Hi");
  }
  
  console.log(sayHi.name);  // name property

  console.log("===================");


  let SayHi = function() {
    alert("Hi");
  };
  
   console.log(SayHi.name); 

   console.log("============================");


   function f(syHi = function() {}) {
    console.log(syHi.name); // sayHi (works!)
  }
  
  f();


  // length property

  function f1(a) {}
function f2(a, b) {}
function many(a, b, c,d) {}

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 4


//  Named properties

let sayHiJi = function func(who) {
    console.log(`Hello, ${who}`);
  };
  
  sayHiJi("John");
