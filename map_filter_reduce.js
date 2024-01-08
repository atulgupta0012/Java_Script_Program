

// This is map
// Map is basically used for transform the value

// here we have to double, triple and binary the array in each element
// const arr=[1,2,3,4,5];


// function double(x)
// {
//     return x*2;
// }

// function triple(x)
// {
//     return  x*3;
// }

// function binary(x)
// {
//     return x.toString(2);
// }

// const output=arr.map(double);
// const output1=arr.map(triple);
// const output2=arr.map(binary);

// console.log(output);
// console.log(output1);

// console.log(output2)







//  filter():- this method is used to filter the array according to need


const arr = [1, 2, 4, 5, 7, 9];

function checkodd(x) {
    return x % 2;
}

const output = arr.filter(checkodd);

console.log(output)


function checkeven(x) {
    return x % 2 == 0;
}


const output1 = arr.filter(checkeven);

console.log(output1)





// reduce():-The reduce() method is flexible and can be used for a variety of tasks, such as summing values, finding the maximum or minimum value, transforming arrays, and more. It's a fundamental tool for working with arrays in JavaScript.

//  write a js program to find the sum of the all element in the given array


const numbers = [1, 2, 3, 4, 5,'a'];

// Using reduce to calculate the sum of the array(Initial value of accumulator is start with 0)
const sum = numbers.reduce(function (accumulator, currentValue) {

    console.log(currentValue)
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15












