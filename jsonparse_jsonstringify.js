let numbers = [0, 1, 2, 3];
const stringifyNum = JSON.stringify(numbers)  // it converts object to json format
console.log(typeof stringifyNum)
numbers = JSON.parse(stringifyNum)   // It converts json to object 

console.log( numbers);

console.log(typeof numbers);