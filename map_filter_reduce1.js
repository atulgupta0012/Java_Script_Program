

// This is map
// map() is basically used for transform the array

// here we have to double, triple and binary the array in each element
const arr=[1,2,3,4,5];
const output=arr.map(function double(x)
{
    return x*2;
});
const output1=arr.map(function triple(x)
{
    return  x*3;
});
const output2=arr.map(function binary(x)
{
    return x.toString(2);
});

console.log(output);
console.log(output1);

console.log(output2)


