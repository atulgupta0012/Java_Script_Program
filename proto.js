let a1={
    name:"Vehicle",
    type:"Honda"
    
}

let b1={
    price:62536.33,
    
}

b1.__proto__=a1;
console.log("Name is:"+b1.name);
console.log("Type is:"+b1.type);
console.log("Price is:"+b1.price);
