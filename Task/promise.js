// const count=true;
// let promise=new Promise(function(resolve,reject)
// {
//     if(count)
//     {
//           resolve('Promise is resolved')
//     }

//      else{
//         reject('Promise is not resolved...')
//      }
// });

// console.log(promise) //  o/p=> Promise { 'Promise is resolved' }




//  How to creatye basic promise object


// let promise= new Promise(function(resolve,reject){

//       let x=90;
//       let y=90;
//       if(x===y)
//       {
//             resolve();
//             console.log("Promise is resolved")
//       }

//       else
//       {
//             reject();
//             console.log("Promise is rejected");
//       }
// });    

// promise.then(function()
// {
//       console.log("Promise is resolved for the given value")
// }).catch(function()
// {
//       console.log("Promise is rejected for the given value")
// });



//   how the then method handles when a promise is resolved

// let promise=new Promise(function(resolve,reject)
// {
//       resolve();
//       console.log("Promise is resolved....")
// });
// promise.then(function(success)
// {
//       console.log("Promise is success")
// },function(error)
// {
//       console.log("There is an error occoured during the promise")
// })




//  Here promise will reject

// let promise=new Promise(function(resolve,reject)
// {
//       reject('Promise is rejected....');

// });

// promise.then(function(success)
// {
//     console.log("Promise is success")
// },function(error)
// {
//       console.log(error)
// });


// catch method handling the reject function of promise.

// let promise=new Promise(function(resolve,reject)
// {
//       reject('Here promise is rejected due to not success of promise')
// });

// promise.then(function(success)
// {
//       console.log(success)
// }).catch(function(errormessage)
// {
//       console.log(errormessage)
// });


let promise=new Promise(function(resolve,reject)
{
   resolve('Promise is resolved')
   let x=2;
   if(x%2==0)
   {
      console.log("The given number is even number")
   }

   reject('Promise is rejected...')
   if(x%2!=0)
   {
      console.log("The given number is not a even number")
   }
});

promise.then(function(resolve)
{
    console.log("Promise is resolved!!!!!!Please use it")
}).catch(function(reject)
{
     console.log("Promise is rejected!!Dont use")
});