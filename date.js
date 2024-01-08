let now = new Date();
console.log(now);

let date =new Date("2017-5-12");
console.log(date);

let date1=new Date();
console.log(date1.getHours());  


let settime=new Date();
settime.setHours(0, 0, 0, 0);
console.log(settime);

let date2=new Date(2016,1,28);
date2.setDate(date2.getDate() + 2);
console.log(date2);




