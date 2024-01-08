function mul(a,b)
{
     return a*b;
}

let double=mul.bind(null,2);
console.log(double(3));
console.log(double(2));
console.log(double(5));