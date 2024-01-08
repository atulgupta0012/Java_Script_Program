
// In microtask there are three promise handleer(.then, .catch, .finally)

let promise=Promise.resolve();
promise.then(()=>console.log("Promise is resolved"));

console.log("Code is Finished!!Because Promise is resolved")



let promise1 = Promise.reject(new Error("Promise Failed!"));
promise1.catch(err => console.log('Here the Promise  is not resolved'));
