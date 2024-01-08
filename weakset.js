var x = new WeakSet(); 
var y = new WeakSet(null); 
x.add({}); 
x.add({}); 
console.log(x); 
console.log(y);

