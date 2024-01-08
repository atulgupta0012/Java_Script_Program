let x=3.56456;
console.log(Math.round(x));   // 4
console.log(Math.floor(x)); // 3
console.log(Math.ceil(x));//4
console.log(Math.trunc(x));// 3

console.log(x.toFixed(2));



let y=3.1
console.log(Math.round(y));   //3 
console.log(Math.floor(y)); // 3
console.log(Math.ceil(y));//4
console.log(Math.trunc(y));// 3

console.log(y.toFixed(1));

console.log(1e500); // infinite

let sum=0.1+0.3;
console.log(sum.toFixed(3));

console.log(parseInt(y));

console.log(parseFloat(y));

console.log(Math.max(12,33,44,66,77));
console.log(Math.min(12,33,44,66,77));


console.log( Number.isNaN(NaN) ); // true
console.log( Number.isNaN("str" / 2) ); // true

// Note the difference:
console.log( Number.isNaN("str") ); // false, because 
console.log( isNaN("str") );