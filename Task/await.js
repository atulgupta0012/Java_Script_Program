
// await is also a keyword which are used inside the async function. It will wait until the promise has not been return result;
//The use of await pauses the async function until the promise returns a result (resolve or reject) value. 
// let promise= new Promise(function(resolve,reject)
// {
//     setTimeout(function()
//     {
//         resolve('Promise resolved')
//     },2000)         
// });

// async function  m2()
// {
   
// let result=await promise;
// console.log(result);
// console.log('Hii!!!')
// }


// m2();


const getData=async()=>
{
    let y=await "Hello Node jS";
    console.log(y)
}

console.log(1);
getData();
console.log(2);