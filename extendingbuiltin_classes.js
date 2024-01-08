class ArrayEx extends Array
{
    // custome method

    sum()
    {
        return this.reduce((acc,val)=>acc+val);  // here reduce method is used to minimize the aray into a single array
    }
}

const customarray=new ArrayEx(1,2,3,4,5);

console.log(customarray.sum());  // 15
console.log(customarray instanceof ArrayEx);   // 
console.log(customarray instanceof Array);

console.log(customarray instanceof String);