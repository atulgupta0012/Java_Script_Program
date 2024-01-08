// Hoisting:- Hoisting is a technique by which a variale and function can be used before declartion

// console.log(h1);
// var h1;     // output :- undefined



// Variable hoisting:-- In variable hosisting  var is hosted before declareing 
// let and const are not hosted before dclaring

// a=5;
// console.log("The value of a  is:::"+a);
// var a;    // here the output is : 5



// In java script initialization is not hosted






// Function hoisting:- A function is called before  declaring it.


// greet();
// function greet()
// {
//    console.log("This is greet function")   // output:- This is greet function
// }


// Function as a expression

greet();

let greet= function()
{
    console.log("Hi This is greet function")    // here we got the error  like Cannot access 'greet' before initialization


}














