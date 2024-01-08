// Fibonacci Series

// let a=0,b=1;
// for(let i=1;i<=10;i++)
// {
//     console.log(a+" ")
//     let nextterm=a+b;
//     a=b;
//     b=nextterm;
// }

// prime number 
// let a=7;
// let count=0;
// for(let i=1;i<=a;i++)
// {
//     if(a%i==0)
//     {
//         count++;
//     }
// }

// if(count==2)
// {
//     console.log("The given number is prime number")
// }

//   else{
//     console.log("The given number is not a prime number")
//   }


// How to define normal function and arrow function

function m1(name)
{
    console.log("This is Normal function")

    this.name=name;
    console.log('User name is:'+name)


}
m1("Amit");

let m2= ()=>
{
    console.log("This is Arrow function")
}
m2();